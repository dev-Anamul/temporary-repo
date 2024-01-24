/* eslint-disable object-curly-newline */
const dayjs = require('dayjs');
const { default: mongoose } = require('mongoose');
const _default = require('../../../../config/default');
const {
    catchAsync,
    generatePagination,
    generateLinks,
    monthToName,
    AppError,
} = require('../../../../utils');
const expenseService = require('../../../../lib/expense');
const { generateReport } = require('../../../../lib/pdf-report/generate-report');
const fiscalYearService = require('../../../../lib/fiscal-year');
const userService = require('../../../../lib/user');

const findOCRForUser = catchAsync(async (req, res) => {
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
    const summeryOfExpenses = await expenseService.expenseSummery({ endDate, startDate, userId });

    // prepare the header for report from start year 3 months to end year 2 months
    const header = [];
    let i = 4;
    while (i <= 15) {
        if (i <= 12) {
            const headerObj = {
                label: `${monthToName(i - 1)?.substring(0, 3)}, ${startYear}`,
                property: `${startYear}-${i}`,
            };
            header.push(headerObj);
        } else {
            const headerObj = {
                label: `${monthToName(i - 1)?.substring(0, 3)}, ${endYear}`,
                property: `${endYear}-${i - 12}`,
            };
            header.push(headerObj);
        }
        i += 1;
    }

    // format the data
    const transformedData = summeryOfExpenses.reduce((acc, curr) => {
        const newExpense = {
            ...curr,
            label: `${monthToName((curr?.month || 1) - 1)}, ${curr?.year}`,
            property: `${curr?.year}-${curr?.month}`,
            [`${curr?.year}-${curr?.month}`]: curr?.totalAmount || 0,
        };

        if (!acc[curr?.typeName]) acc[curr?.typeName] = [newExpense];
        else acc[curr?.typeName].push(newExpense);

        return acc;
    }, {});

    const datas = Object.keys(transformedData).map((key) => {
        const data = transformedData[key];

        const dataRow = [key];

        header.forEach((headerObj) => {
            const found = data.find((item) => item?.property === headerObj?.property);
            if (!found) {
                dataRow.push('-');
            } else {
                dataRow.push(`$ ${found?.totalAmount}`);
            }
        });

        const total = data.reduce((acc, curr) => acc + curr.totalAmount, 0);
        dataRow.push(`$ ${total}`);

        return dataRow;
    });

    // find month wise total
    const totalRow = datas.reduce((acc, curr) => {
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

    const totalRowWithDollar = totalRow.map((item) => `$ ${item}`);

    datas.push(totalRowWithDollar);

    // const doc =
    const filePath = await generateReport({
        data: datas,
        header: ['expense'].concat(header.map((e) => e.label)).concat(['total']),
        user,
        startYear,
        endYear,
    });

    // generate response
    const response = {
        code: 200,
        success: true,
        message: 'Successfully retrieved expenses',
        // data: transformedData,
        // datas,
        // header,
        file: `${process.env.APP_URL}/${filePath}`,
    };

    // send response
    res.status(200).json(response);

    // doc.pipe(res);
    // doc.end();
});

// find ocr for admin
const findAllForAdmin = catchAsync(async (req, res) => {
    const page = parseInt(req.query.page, 10) || _default.page;
    const limit = parseInt(req.query.limit, 10) || _default.limit;
    const sort = req.query.sort || _default.sort;
    const order = req.query.order || _default.order;
    const search = req.query.search || _default.search;
    const fields = req.query.fields || _default.fields;
    const populate = req.query.expand || _default.populate;

    const { data, totalItems } = await expenseService.findAllForAdmin({
        page,
        limit,
        sort,
        order,
        search,
        fields,
        populate,
    });

    // generate pagination
    const pagination = generatePagination({ page, limit, totalItems });

    // generate links
    const links = generateLinks({
        baseUrl: req.baseUrl,
        query: req.query,
        page,
        totalPages: pagination?.totalPages,
    });

    // generate response
    const response = {
        code: 200,
        success: true,
        message: 'Successfully retrieved expenses',
        data,
        links,
        pagination,
    };

    // send response
    res.status(200).json(response);
});
module.exports = { findOCRForUser, findAllForAdmin };
