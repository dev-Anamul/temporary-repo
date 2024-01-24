const { Expense } = require('../../model');

const createExpense = async ({
    expenseName,
    description,
    expenseType,
    totalAmount,
    isGSTClaimable,
    expenseDate,
    userId,
    imageUrl,
    ocrAmount = 0,
    status,
    gstAmount,
    claimableAmount,
    type,
}) => {
    const newExpense = new Expense({
        expenseName,
        description,
        expenseType,
        isGSTClaimable,
        expenseDate,
        userId,
        filePath: imageUrl,
        status,
        ocrAmount,
        totalAmount,
        gstAmount,
        claimableAmount,
        type,
    });

    return newExpense.save();
};

/// create bulk expense
const createBulkExpense = async (expenses = []) => {
    const expensesPromise = expenses.map((expense) => {
        const newExpense = new Expense(expense);
        return newExpense.save();
    });

    // newExpenses is an array of promises
    const newExpenses = await Promise.all(expensesPromise);

    // return array of expenses
    return newExpenses.map((expense) => ({ ...expense._doc, id: expense._id }));
};

module.exports = { createExpense, createBulkExpense };
