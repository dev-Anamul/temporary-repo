const { AppError } = require('../../utils');
const { expenseById } = require('./find-single');

const updateExpense = async ({
    id,
    totalAmount,
    description,
    expenseType,
    expenseName,
    isGSTClaimable,
    expenseDate,
    gstAmount,
    claimableAmount,
    ocrAmount,
    status,
    filePath,
    type,
}) => {
    // check if expense exists with this id
    const expense = await expenseById(id);

    // if no expense found with this id then throw error
    if (!expense) throw new AppError('No expense found with this id', 404, 'Not Found');

    // finally update the expense
    expense.description = description ?? expense.description;
    expense.expenseName = expenseName || expense.expenseName;
    expense.expenseType = expenseType || expense.expenseType;
    expense.isGSTClaimable = isGSTClaimable ?? expense.isGSTClaimable;
    expense.expenseDate = expenseDate || expense.expenseDate;
    expense.totalAmount = totalAmount || expense.totalAmount;
    expense.gstAmount = gstAmount ?? expense.gstAmount;
    expense.claimableAmount = claimableAmount ?? expense.claimableAmount;
    expense.ocrAmount = ocrAmount || expense.ocrAmount;
    expense.status = status || expense.status;
    expense.filePath = filePath ?? expense.filePath;
    expense.type = type ?? expense.type;

    // save the expense
    return expense.save();
};

// update expense status by id
const updateExpenseStatus = async ({ id, ocrAmount = 0, status }) => {
    // check if expense exists with this id
    const expense = await expenseById(id);

    // if no expense found with this id then throw error
    if (!expense) throw new AppError('No expense found with this id', 404, 'Not Found');

    // finally update the expense
    expense.status = status;
    expense.ocrAmount = +ocrAmount || +expense.ocrAmount || 0;

    // save the expense
    return expense.save();
};

module.exports = { updateExpense, updateExpenseStatus };
