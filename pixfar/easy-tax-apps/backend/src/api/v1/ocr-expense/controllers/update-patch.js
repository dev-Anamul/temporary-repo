/* eslint-disable object-curly-newline */
const { catchAsync } = require('../../../../utils');
const ocrExpenseService = require('../../../../lib/ocr-expense');

const updateOCRExpense = catchAsync(async (req, res) => {
    const { id } = req.params;
    const userId = req.user._id;
    const { title, description, postingDate, expenseType } = req.body || {};

    const ocrExpense = await ocrExpenseService.updateOcr({
        title,
        description,
        postingDate,
        expenseType,
        id,
        userId,
        imageUrl: req.file?.filename ? `${process.env.APP_URL}/ocrs/${req.file.filename}` : null,
    });

    // generate responses
    const response = {
        code: 200,
        status: 'success',
        message: 'OCR Expense updated',
        data: {
            ocrExpense,
        },
        links: {
            self: req.originalUrl,
            all_OCRs: '/api/v1/ocr-expenses',
        },
    };
    return res.status(200).json(response);
});

module.exports = { updateOCRExpense };
