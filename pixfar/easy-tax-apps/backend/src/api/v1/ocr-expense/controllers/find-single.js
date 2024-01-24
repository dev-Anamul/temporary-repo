/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
const dayjs = require('dayjs');
const PDFDocument = require('pdfkit-table');
const fs = require('fs');
const { default: mongoose } = require('mongoose');
const { catchAsync, monthToName, calculateTaxableIncome, AppError } = require('../../../../utils');
const dashboardService = require('../../../../lib/dashboard');
const { calculateTax } = require('../../../../lib/tax/calculate-tax');
const fiscalYearService = require('../../../../lib/fiscal-year');
const userService = require('../../../../lib/user');

const findSingleOcrExpense = catchAsync(async (req, res) => {
    const { fiscal } = req.query || {};

    const userId = req?.query?.userId
        ? new mongoose.Types.ObjectId(req?.query?.userId)
        : req.user._id;

    const user = await userService.getUserById(userId);

    let startDate = null;
    let endDate = null;
    let startYear = null;
    let endYear = null;

    if (fiscal) {
        // get the fiscal year
        const fiscalYear = await fiscalYearService.findFiscalYearById(fiscal);

        if (!fiscalYear) throw new AppError('Fiscal Year does not exist', 400, 'Bad Request');

        startDate = dayjs(fiscalYear?.startDate).toDate();
        endDate = dayjs(fiscalYear?.endDate).toDate();

        startYear = dayjs(fiscalYear?.startDate).get('year');
        endYear = dayjs(fiscalYear?.endDate).get('year');
    }

    if (!fiscal && dayjs().isBefore(`${dayjs().get('year')}-02-31`)) {
        startDate = dayjs(`${dayjs().get('year') - 1}-03-01`).toDate();
        endDate = dayjs(`${dayjs().get('year')}-02-31`).toDate();

        startYear = dayjs().get('year') - 1;
        endYear = dayjs().get('year');
    }

    if (!fiscal && dayjs().isAfter(`${dayjs().get('year')}-02-31`)) {
        startDate = dayjs(`${dayjs().get('year')}-03-01`).toDate();
        endDate = dayjs(`${dayjs().get('year') + 1}-02-31`).toDate();

        startYear = dayjs().get('year');
        endYear = dayjs().get('year') + 1;
    }

    // get the summery of expenses
    const categoryWiseMonthlyExpense = await dashboardService.categoryWiseMonthlyExpense({
        endDate,
        startDate,
        userId,
    });

    // monthly income and expenses
    // get the monthly expense
    const expenses = await dashboardService.monthlyExpense({
        startDate,
        endDate,
        userId,
    });

    // get the monthly income
    const incomes = await dashboardService.monthlyIncome({
        startDate,
        endDate,
        userId,
    });

    // prepare the response
    const formattedExpense = expenses.map((expense) => {
        const relatedIncome = incomes.find(
            (income) =>
                income?._id?.year === expense?._id?.year &&
                income?._id?.month === expense?._id?.month
        );

        return {
            ...expense,
            income: relatedIncome?.totalAmount || 0,
            expense: expense?.totalAmount || 0,
            label: `${monthToName((expense?._id?.month || 0) - 1)}, ${expense._id.year}`,
        };
    });

    const formattedIncome = incomes.map((income) => {
        const relatedExpense = expenses.find(
            (expense) =>
                income?._id?.year === expense?._id?.year &&
                income?._id?.month === expense?._id?.month
        );

        return {
            _id: income._id,
            expense: relatedExpense?.expense || 0,
            claimableAmount: relatedExpense?.claimableAmount || 0,
            count: relatedExpense?.count || 0,
            income: income?.totalAmount || 0,
            label: `${monthToName((income?._id?.month || 0) - 1)}, ${income._id.year}`,
        };
    });

    const uniqueData = [];
    const map = new Map();

    // eslint-disable-next-line no-restricted-syntax
    for (const item of [...formattedExpense, ...formattedIncome]) {
        if (!map.has(JSON.stringify(item?._id))) {
            map.set(JSON.stringify(item?._id), true);
            uniqueData.push(item);
        }
    }

    // generate report

    const pdfDoc = new PDFDocument({
        size: 'A4',
        margin: 30,
        layout: 'landscape',
    });

    const filePath = `/report/${user?.id}-${user?.firstName}-fiscal-${startYear}-${endYear}.pdf`;
    const output = fs.createWriteStream(`public/${filePath}`);

    // Pipe the PDF content to a file
    pdfDoc.pipe(output);

    // text filed
    pdfDoc.fontSize(20).text(`FINANCIAL STATEMENT PREPARED FOR ${user?.fullName.toUpperCase()}`, {
        align: 'left',
    });

    pdfDoc.fontSize(12).text(`For the period 1 April ${startYear} to 31 March ${endYear}`, {
        align: 'left',
    });

    pdfDoc.fontSize(10).text(`IRD Number: ${user?.irdNumber}`, {
        align: 'left',
    });

    pdfDoc.moveDown();

    pdfDoc.fontSize(15).text('Income', {
        align: 'left',
    });

    pdfDoc.moveDown();

    // rows for income
    const incomeRowsPromise = uniqueData.map(async (item) => {
        const taxableIncome = calculateTaxableIncome(item?.income, item?.expense);
        const tax = await calculateTax(taxableIncome);
        return [item?.label, taxableIncome, tax, item?.income];
    });
    const incomeRows = await Promise.all(incomeRowsPromise);

    const totalIncomeRow = incomeRows.reduce((acc, curr) => {
        curr.forEach((item, index) => {
            if (index === 0) {
                acc[0] = 'Total';
            } else if (acc[index]) {
                acc[index] += item;
            } else {
                acc[index] = item;
            }
        });

        return acc;
    }, []);

    incomeRows.push(totalIncomeRow);

    // income rows with dollar
    const incomeRowsWithDollar = incomeRows.map((item) => {
        const row = item.map((e, i) => {
            if (i === 0) return e;
            return `$ ${e}`;
        });
        return row;
    });

    // Set up the layout of the table
    const tableConfig = {
        // headers: ['Month', 'Taxable Income', 'Income Tax', 'ACC', 'Net pay'],
        headers: ['Month', 'Taxable Income', 'Income Tax', 'Net pay'],
        rows: incomeRowsWithDollar,
    };

    // Add the table to the PDF
    pdfDoc.table(tableConfig, {
        prepareHeader: () => pdfDoc.fontSize(10),
        prepareRow: () => pdfDoc.fontSize(10),
    });

    pdfDoc.moveDown();

    pdfDoc.fontSize(15).text('Expenses', {
        align: 'left',
    });

    pdfDoc.moveDown();

    // rows for expense
    const rows = categoryWiseMonthlyExpense.map((item) => [
        item?.expenseType,
        `$ ${item?.totalAmount}`,
        `$ ${item?.claimableAmount}`,
    ]);

    // add total row
    const totalRow = rows.reduce((acc, curr) => {
        curr.forEach((item, index) => {
            if (index === 0) {
                acc[0] = 'Total';
            } else if (acc[index]) {
                acc[index] += Number(item.substring(1)) || 0;
            } else {
                acc[index] = Number(item.substring(1)) || 0;
            }
        });

        return acc;
    }, []);

    // add dollar sign to the total row
    const totalRowWithDollar = totalRow.map((item, index) => {
        if (index === 0) return item;
        return `$ ${item}`;
    });

    rows.push(totalRowWithDollar);

    // Set up the layout of the table
    const tableConfig1 = {
        headers: ['Category', 'Expense Total (ex GST)', 'Claimable Amount'],
        rows,
    };

    // Add the table to the PDF
    pdfDoc.table(tableConfig1, {
        prepareHeader: () => pdfDoc.fontSize(10),
        prepareRow: () => pdfDoc.fontSize(10),
    });

    pdfDoc.moveDown();

    // pdfDoc.fontSize(15).text('GST', {
    //     align: 'left',
    // });

    // Finalize the PDF
    pdfDoc.end();

    // prepare the header for report from start year 3 months to end year 2 months
    res.status(200).json({
        status: 'success',
        code: 200,
        message: 'Successfully retrieved category wise monthly expense',
        file: `${process.env.APP_URL}/${filePath}`,
        data: {
            categoryWiseMonthlyExpense,
        },
        monthlyIncomeAndExpenses: uniqueData,
    });
});

module.exports = { findSingleOcrExpense };
