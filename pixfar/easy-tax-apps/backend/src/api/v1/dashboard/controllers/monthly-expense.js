const _default = require('../../../../config/default');
const dashboardService = require('../../../../lib/dashboard');
const { catchAsync, generateStartEndMonth } = require('../../../../utils');
const { monthToName } = require('../../../../utils/month-to-name');

const monthlyExpense = catchAsync(async (req, res) => {
    // num of months to get the data for
    const numOfMonths = parseInt(req.query.numOfMonths, 10) || _default.numOfMonths;

    // get the user id
    const userId = req.user._id;

    // Calculate the date range for the last 12 months

    const { endMonth: endDate, startMonth: startDate } = generateStartEndMonth({ numOfMonths });

    // get the monthly expense
    const expenses = await dashboardService.monthlyExpense({
        userId,
        startDate,
        endDate,
    });

    // prepare the response
    const response = {
        code: 200,
        success: true,
        message: 'Successfully retrieved expenses',
        data: {
            expenses,
        },
    };

    // if expenses , format the data
    if (!expenses?.length) {
        response.data.expenses = [];
    } else {
        // format the data
        response.data.expenses = expenses.map((expense) => {
            const newExpense = {
                ...expense._id,
                ...expense,
                label: `${monthToName(expense?._id?.month)}, ${expense._id.year}`,
            };

            delete newExpense._id;

            return newExpense;
        });
    }

    // send response
    res.status(200).json(response);
});

// export the module
module.exports = {
    monthlyExpense,
};
