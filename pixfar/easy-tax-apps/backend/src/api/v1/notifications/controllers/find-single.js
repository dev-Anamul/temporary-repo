const { catchAsync, AppError } = require('../../../../utils');
const notificationService = require('../../../../lib/notifications');

const findOneNotification = catchAsync(async (req, res, next) => {
    // const userId = req.user._id;
    const { id } = req.params;

    const notification = await notificationService.findSingleById(id);

    // todo: check for user id
    // if (!notification || notification.user.toString() !== userId.toString()) {
    //     return next(new AppError('Notification not found', 404, 'Not Found'));
    // }

    if (!notification) {
        return next(new AppError('Notification not found', 404, 'Not Found'));
    }

    const response = {
        code: 200,
        success: true,
        message: 'Successfully retrieved notification',
        data: notification,
    };

    return res.status(200).json(response);
});

const findSingleForAdmin = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const notification = await notificationService.findSingleById(id);

    if (!notification) {
        return next(new AppError('Notification not found', 404, 'Not Found'));
    }

    const response = {
        code: 200,
        success: true,
        message: 'Successfully retrieved notification',
        data: notification,
    };

    return res.status(200).json(response);
});

module.exports = { findSingleForAdmin, findOneNotification };
