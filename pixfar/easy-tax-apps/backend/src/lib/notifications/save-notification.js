/* eslint-disable object-curly-newline */
const { Notification } = require('../../model');

// save notification to db
const saveNotification = async ({
    id,
    title,
    body,
    imageUrl,
    status,
    notificationType,
    channel,
}) => {
    const newNotification = new Notification({
        title,
        body,
        imageUrl,
        user: id || null,
        status,
        notificationType: notificationType || 'single',
        channel: channel || null,
    });

    return newNotification.save();
};

module.exports = {
    saveNotification,
};
