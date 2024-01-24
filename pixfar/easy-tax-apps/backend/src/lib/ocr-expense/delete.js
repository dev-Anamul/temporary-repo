const { AppError } = require('../../utils');
const { findOCRbyId, findOCRbyIdAndUserId } = require('./find-single');

const removeOcrById = async (id) => {
    const ocr = await findOCRbyId(id);

    if (!ocr) throw new AppError('OCR Expense not found', 404, 'Not Found');

    return ocr.deleteOne();
};

// remove ocr by id and userId
const removeOcrByIdAndUserId = async (id, userId) => {
    const ocr = await findOCRbyIdAndUserId(id, userId);

    if (!ocr) throw new AppError('OCR Expense not found', 404, 'Not Found');

    return ocr.deleteOne();
};

// export all functions
module.exports = {
    removeOcrById,
    removeOcrByIdAndUserId,
};
