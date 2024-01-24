const { catchAsync, AppError } = require('../../../../utils');
const supportMessageService = require('../../../../lib/support-message');

const findSingle = catchAsync(async (req, res, next) => {
    const { id } = req.params || {};
    const message = await supportMessageService.findSingleById(id);

    if (!message) {
        return next(new AppError('Support message not found', 404));
    }

    const response = {
        code: 200,
        status: 'success',
        message: 'Successfully retrieved support message',
        data: {
            message,
        },
        links: {
            self: req.originalUrl,
        },
    };
    return res.status(200).json(response);
});

module.exports = { findSingle };
