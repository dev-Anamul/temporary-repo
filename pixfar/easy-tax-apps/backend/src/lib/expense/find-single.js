const { Expense } = require('../../model');

const expenseById = async (id) => {
    const expense = await Expense.findById(id).populate('expenseType');
    return expense;
};

/// find the last expense sort by expense date
const findLastExpense = async (userId) => {
    const expense = await Expense.findOne({ userId }).sort({ expenseDate: -1 });
    return expense;
};

module.exports = { expenseById, findLastExpense };
