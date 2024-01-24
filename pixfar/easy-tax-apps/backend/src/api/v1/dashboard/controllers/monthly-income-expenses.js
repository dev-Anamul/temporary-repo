/* eslint-disable no-restricted-syntax */
/* eslint-disable prettier/prettier */

const _default = require('../../../../config/default');
const { catchAsync, monthToName, generateStartEndMonth } = require('../../../../utils');
const dashboardService = require('../../../../lib/dashboard');

const monthlyIncomeExpenses = catchAsync(async (req, res) => {
    // get month and year from query
    const numOfMonths = parseInt(req.query.numOfMonths, 10) || _default.numOfMonths;

    // Calculate the date range for the last 12 months

    const { endMonth: endDate, startMonth: startDate } = generateStartEndMonth({ numOfMonths });

    // get the monthly expense
    const expenses = await dashboardService.monthlyExpense({
        startDate,
        endDate,
    });

    // get the monthly income
    const incomes = await dashboardService.monthlyIncome({
        startDate,
        endDate,
    });

    // prepare the response
    const formattedExpense = expenses.map((expense) => {
        const relatedIncome = incomes.find(
            (income) => income?._id?.year === expense?._id?.year
                && income?._id?.month === expense?._id?.month
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
            (expense) => income?._id?.year === expense?._id?.year
                && income?._id?.month === expense?._id?.month
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

    for (const item of [...formattedExpense, ...formattedIncome]) {
        if (!map.has(JSON.stringify(item?._id))) {
            map.set(JSON.stringify(item?._id), true);
            uniqueData.push(item);
        }
    }

    // generate response
    const response = {
        code: 200,
        status: 'success',
        message: 'Monthly income and expenses fetched successfully',
        data: uniqueData,
    };

    return res.status(200).json(response);
});

// export the module
module.exports = {
    monthlyIncomeExpenses,
};
