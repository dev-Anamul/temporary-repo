const _default = require('../../../../config/default');
const { catchAsync, generateStartEndDate, getWeekdayName } = require('../../../../utils');
const dashboardService = require('../../../../lib/dashboard');

const dailyIncomeController = catchAsync(async (req, res) => {
    // destructure the request body
    const numOfDays = parseInt(req.query.numOfDays, 10) || _default.numOfDays;

    // Calculate the date range for the last 7 days
    const { endDate, startDate } = generateStartEndDate({ numOfDays });

    // get the daily income
    const incomes = await dashboardService.dailyIncome({
        userId: req.user._id,
        startDate,
        endDate,
    });

    // prepare the response

    const formattedIncome = incomes.map((income) => ({
        ...income?._id,
        ...income,
        label: getWeekdayName(income._id.year, income._id.month, income._id.day),
    }));

    // send the response
    return res.status(200).json({
        code: 200,
        status: 'success',
        message: 'Daily Income fetched successfully',
        data: {
            incomes: formattedIncome || [],
        },
    });
});

// export the module
module.exports = { dailyIncomeController };
