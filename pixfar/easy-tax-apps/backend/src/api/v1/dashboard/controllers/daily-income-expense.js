/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
const _default = require('../../../../config/default');
const { catchAsync, monthToName, generateStartEndDate } = require('../../../../utils');
const dashboardService = require('../../../../lib/dashboard');

const dailyIncomeAndExpense = catchAsync(async (req, res) => {
    // destructure the request body
    const numOfDays = parseInt(req.query.numOfDays, 10) || _default.numOfDays;

    // Calculate the date range for the last 7 days
    const { endDate, startDate } = generateStartEndDate({ numOfDays });

    // get the daily expense
    const expenses = await dashboardService.dailyExpense({
        startDate,
        endDate,
    });

    // get the daily income
    const incomes = await dashboardService.dailyIncome({
        startDate,
        endDate,
    });

    // prepare the response

    const formattedExpense = expenses.map((expense) => {
        const relatedIncome = incomes.find(
            (income) =>
                income?._id?.year === expense?._id?.year &&
                income?._id?.month === expense?._id?.month &&
                income?._id?.week === expense?._id?.week &&
                income?._id?.day === expense?._id?.day
        );

        return {
            ...expense,
            income: relatedIncome?.totalAmount || 0,
            label: `${monthToName((expense?._id?.month || 0) - 1)}, ${expense._id.day}`,
        };
    });

    const formattedIncome = incomes.map((income) => {
        const relatedExpense = expenses.find(
            (expense) =>
                income?._id?.year === expense?._id?.year &&
                income?._id?.month === expense?._id?.month &&
                income?._id?.week === expense?._id?.week &&
                income?._id?.day === expense?._id?.day
        );

        return {
            _id: income._id,
            expense: relatedExpense?.expense || 0,
            claimableAmount: relatedExpense?.claimableAmount || 0,
            count: relatedExpense?.count || 0,
            income: income?.totalAmount || 0,
            label: `${monthToName((income?._id?.month || 0) - 1)}, ${income._id.day}`,
        };
    });

    const uniqueRecords = [];
    const map = new Map();

    // eslint-disable-next-line no-restricted-syntax
    for (const item of [...formattedExpense, ...formattedIncome]) {
        if (!map.has(JSON.stringify(item?._id))) {
            map.set(JSON.stringify(item?._id), true);
            uniqueRecords.push(item);
        }
    }

    const response = {
        code: 201,
        status: 'success',
        message: 'Daily Expense created successfully',
        data: uniqueRecords,
    };

    // send the response
    return res.status(201).json(response);
});

// export the module
module.exports = {
    dailyIncomeAndExpense,
};
