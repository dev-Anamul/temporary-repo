const { catchAsync } = require('../../../../utils');
const supportService = require('../../../../lib/support-message');

const markAsReadController = catchAsync(async (req, res) => {
    const { id } = req.params;

    const updatedMessage = await supportService.markAsRead({ id });

    const response = {
        code: 200,
        status: 'success',
        message: 'Successfully marked as read',
        data: updatedMessage,
        links: {
            self: req.originalUrl,
            all: '/api/v1/support-messages',
        },
    };

    return res.status(200).json(response);
});

module.exports = { markAsReadController };
