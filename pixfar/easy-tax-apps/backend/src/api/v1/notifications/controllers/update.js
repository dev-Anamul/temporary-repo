const { catchAsync } = require('../../../../utils/catchAsync');
const notificationService = require('../../../../lib/notifications');

const updateNotificationStatus = catchAsync(async (req, res) => {
    const { id } = req.params;
    const { read } = req.body;

    const notification = await notificationService.updateNotification({
        id,
        read,
    });

    const response = {
        status: 'success',
        code: 200,
        message: 'Notification updated successfully',
        data: {
            notification,
        },
    };

    res.status(200).json(response);
});

module.exports = { updateNotificationStatus };
