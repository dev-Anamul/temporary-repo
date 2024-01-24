const { catchAsync, AppError } = require('../../../../utils');
const ocrService = require('../../../../lib/ocr-expense');

const ocrProcess = catchAsync(async (req, res, next) => {
    const { ocrIds } = req.body || {};

    if (!ocrIds.length) {
        return next(new AppError('No ocrIds found', 404, 'Not Found'));
    }

    const ocr = await ocrService.orcProcess({ ocrIds });

    const response = {
        code: 200,
        status: 'success',
        message: 'OCR processed successfully',
        data: {
            ...ocr._doc,
        },
        links: {
            self: req.originalUrl,
            all: '/api/v1/ocr',
        },
    };

    return res.status(200).json(response);
});

module.exports = { ocrProcess };
