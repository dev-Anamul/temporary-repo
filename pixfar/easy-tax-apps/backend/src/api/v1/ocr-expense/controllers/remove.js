const { catchAsync } = require('../../../../utils');
const ocrExpenseService = require('../../../../lib/ocr-expense');

const removeOCRExpense = catchAsync(async (req, res) => {
    const { id } = req.params;
    const userId = req.user._id;

    await ocrExpenseService.removeOcrByIdAndUserId(id, userId);

    res.status(200).json({
        code: 200,
        status: 'success',
        message: 'OCR Expense deleted',
    });
});

module.exports = { removeOCRExpense };
