/* eslint-disable object-curly-newline */
const { OCRExpense } = require('../../model');

const createOcr = async ({ title, description, postingDate, expenseType, userId, imageUrl }) => {
    const ocr = await OCRExpense.create({
        title,
        description,
        postingDate,
        expenseType,
        userId,
        imageUrl,
    });
    return ocr;
};

module.exports = {
    createOcr,
};
