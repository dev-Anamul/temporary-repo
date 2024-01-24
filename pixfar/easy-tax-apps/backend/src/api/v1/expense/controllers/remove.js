const { catchAsync } = require('../../../../utils');
const expenseService = require('../../../../lib/expense');

const removeExpense = catchAsync(async (req, res) => {
    const { id } = req.params || {};
    const userId = req.user?.id;

    await expenseService.deleteByUserIdAndId(userId, id);

    return res.status(200).json({
        code: 200,
        status: 'success',
        message: 'Expense deleted successfully',
    });
});

module.exports = { removeExpense };
