const { OCRExpense } = require('../../model');

const findOCRbyId = async (id) => {
    const ocr = await OCRExpense.findById(id);
    return ocr;
};

// findOne by id and userId
const findOCRbyIdAndUserId = async (id, userId) => {
    const ocr = await OCRExpense.findOne({ _id: id, userId });
    return ocr;
};

module.exports = {
    findOCRbyId,
    findOCRbyIdAndUserId,
};
