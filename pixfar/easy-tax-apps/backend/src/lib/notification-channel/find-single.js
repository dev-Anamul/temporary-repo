const { NotificationChannel } = require('../../model');

const findNotificationChannelById = async ({ id }) => {
    const notificationChannel = NotificationChannel.findById(id);
    return notificationChannel;
};

module.exports = { findNotificationChannelById };
