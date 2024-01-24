/* eslint-disable object-curly-newline */
const { AppError } = require('../../utils/AppError');
const { findSingleById } = require('./find-single');

const updateNotification = async ({ id, title, body, read, imageUrl }) => {
    const notification = await findSingleById(id);

    if (!notification) {
        throw new AppError('No notification found with this ID', 404, 'Not Found');
    }

    notification.title = title || notification.title;
    notification.body = body || notification.body;
    notification.read = read || notification.read;
    notification.imageUrl = imageUrl || notification.imageUrl;

    return notification.save();
};

module.exports = { updateNotification };
