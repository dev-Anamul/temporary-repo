const { catchAsync } = require('../../../../utils');
const expenseService = require('../../../../lib/expense');

const costByCategory = catchAsync(async (req, res) => {
    const expensesData = await expenseService.totalCostByCategory({ userId: req.user._id });

    const response = {
        code: 200,
        status: 'success',
        data: {
            expenses: expensesData,
        },
        links: {
            self: req.originalUrl,
        },
    };

    res.status(200).json(response);
});

module.exports = {
    costByCategory,
};
