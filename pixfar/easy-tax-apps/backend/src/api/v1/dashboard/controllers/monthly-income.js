const _default = require('../../../../config/default');
const dashboardService = require('../../../../lib/dashboard');
const { catchAsync, generateStartEndMonth } = require('../../../../utils');

const monthlyIncome = catchAsync(async (req, res) => {
    // num of months to get the data for
    const numOfMonths = parseInt(req.query.numOfMonths, 10) || _default.numOfMonths;

    // get the user id
    const userId = req.user._id;

    // Calculate the date range for the last 12 months
    const { endMonth: endDate, startMonth: startDate } = generateStartEndMonth({ numOfMonths });

    // get the monthly expense
    const incomes = await dashboardService.monthlyIncome({
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
            incomes,
        },
    };

    // send response
    res.status(200).json(response);
});

// export the module
module.exports = {
    monthlyIncome,
};
