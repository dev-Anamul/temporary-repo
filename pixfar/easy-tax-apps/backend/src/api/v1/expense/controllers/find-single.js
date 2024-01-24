const { catchAsync, AppError } = require('../../../../utils');
const expenseService = require('../../../../lib/expense');

const findOne = catchAsync(async (req, res, next) => {
    const { id } = req.params || {};

    const expense = await expenseService.expenseById(id);

    if (!expense) {
        return next(new AppError('Expense not found', 404, 'Not Found'));
    }

    const response = {
        code: 200,
        success: true,
        message: 'Successfully retrieved expense',
        expense,
        links: {
            self: req.originalUrl,
            all_expense: '/api/v1/expenses',
        },
    };

    return res.status(200).json(response);
});

module.exports = { findOne };
