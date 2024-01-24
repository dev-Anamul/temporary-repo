const { catchAsync } = require('../../../../utils');
const dashboardService = require('../../../../lib/dashboard');

const incomeByCategoryController = catchAsync(async (req, res) => {
    const incomes = await dashboardService.totalIncomeByCategory({
        userId: req.user._id,
    });

    const response = {
        code: 200,
        status: 'success',
        data: {
            incomes,
        },
        links: {
            self: req.originalUrl,
        },
    };

    res.status(200).json(response);
});

module.exports = {
    incomeByCategoryController,
};
