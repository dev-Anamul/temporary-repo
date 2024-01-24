/* eslint-disable object-curly-newline */
const { AppError } = require('../../utils');
const { findOCRbyIdAndUserId } = require('./find-single');

const updateOcr = async ({
    id,
    userId,
    title,
    description,
    postingDate,
    expenseType,
    imageUrl,
}) => {
    const ocrExpense = await findOCRbyIdAndUserId(id, userId);

    if (!ocrExpense) throw new AppError('OCR Expense not found', 404, 'Not Found');

    ocrExpense.title = title || ocrExpense.title;
    ocrExpense.description = description || ocrExpense.description;
    ocrExpense.postingDate = postingDate || ocrExpense.postingDate;
    ocrExpense.expenseType = expenseType || ocrExpense.expenseType;
    ocrExpense.imageUrl = imageUrl || ocrExpense.imageUrl;

    return ocrExpense.save();
};

module.exports = {
    updateOcr,
};
