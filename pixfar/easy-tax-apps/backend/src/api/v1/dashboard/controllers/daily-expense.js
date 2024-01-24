const { catchAsync } = require('../../../../utils');
const dashboardService = require('../../../../lib/dashboard');
const { getWeekdayName } = require('../../../../utils/day-to-name');
const _default = require('../../../../config/default');
const { generateStartEndDate } = require('../../../../utils');

const dailyExpense = catchAsync(async (req, res) => {
    // destructure the request body
    const numOfDays = parseInt(req.query.numOfDays, 10) || _default.numOfDays;

    // Calculate the date range for the last 7 days
    // todo: we can make this dynamic by allowing the user to choose the date range
    const { endDate, startDate } = generateStartEndDate({ numOfDays });

    // get the user id
    const userId = req.user._id;

    // get the daily expense
    const expenses = await dashboardService.dailyExpense({
        userId,
        startDate,
        endDate,
    });

    // if expenses , format the data

    // prepare the response
    const response = {
        code: 201,
        status: 'success',
        message: 'Daily Expense created successfully',
        data: {
            expenses,
        },
    };

    if (!expenses?.length) {
        response.data.expenses = [];
    } else {
        // format the data
        response.data.expenses = expenses.map((expense) => {
            const newExpense = {
                ...expense._id,
                ...expense,
                label: getWeekdayName(expense._id.year, expense._id.month, expense._id.day),
            };

            delete newExpense._id;

            return newExpense;
        });
    }

    // send the response
    return res.status(201).json(response);
});

// daily expense for admin
const adminDailyExpense = catchAsync(async (req, res) => {
    // destructure the request body
    const numOfDays = parseInt(req.query.numOfDays, 10) || _default.numOfDays;

    // Calculate the date range for the last 7 days

    const { endDate, startDate } = generateStartEndDate({ numOfDays });

    // get the daily expense
    const expenses = await dashboardService.dailyExpense({
        startDate,
        endDate,
    });

    // if expenses , format the data

    // prepare the response
    const response = {
        code: 201,
        status: 'success',
        message: 'Daily Expense created successfully',
        data: {
            expenses,
        },
    };

    if (!expenses?.length) {
        response.data.expenses = [];
    } else {
        // format the data
        response.data.expenses = expenses.map((expense) => {
            const newExpense = {
                ...expense._id,
                ...expense,
                label: getWeekdayName(expense._id.year, expense._id.month, expense._id.day),
            };

            delete newExpense._id;

            return newExpense;
        });
    }

    // send the response
    return res.status(201).json(response);
});

// export the module
module.exports = {
    dailyExpense,
    adminDailyExpense,
};
