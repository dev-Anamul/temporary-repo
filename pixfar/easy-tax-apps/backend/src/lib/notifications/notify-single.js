/* eslint-disable object-curly-newline */

const { AppError } = require('../../utils');
const { sendNotificationToSingleUser } = require('../fcm-notification');
const { getUserById } = require('../user');
const { saveNotification } = require('./save-notification');

// send notification to single user
const notifySingle = async ({ id, title, body, imageUrl }) => {
    // get user by id
    const user = await getUserById(id);

    // if user does not exist, throw error
    if (!user) throw new AppError('User not found', 404, 'Not Found');

    // send notification
    const notification = await sendNotificationToSingleUser({
        to: user?.notificationToken || '',
        title,
        body,
        imageUrl,
    });

    // save notification to db
    const savedNotification = await saveNotification({
        id,
        title,
        body,
        imageUrl,
        status: notification.success === 1 ? 'success' : 'failed',
        notificationType: 'single',
    });

    // return notification
    return { ...savedNotification._doc, id: savedNotification.id };
};

module.exports = {
    notifySingle,
};
