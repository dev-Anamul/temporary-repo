const { AppError } = require('../../utils');
const { sendNotificationToMultipleUsers } = require('../fcm-notification');
const { allNotificationTokens } = require('../user');
const { saveNotification } = require('./save-notification');

const notifyAll = async ({ title, body, imageUrl }) => {
    // get all notification tokens
    const tokens = await allNotificationTokens();

    // if user does not exist, throw error
    if (!tokens.length) throw new AppError('User not found', 404, 'Not Found');

    // send notification
    const notification = await sendNotificationToMultipleUsers({
        to: tokens,
        title,
        body,
        imageUrl,
    });
    const savedNotification = await saveNotification({
        title,
        body,
        imageUrl,
        status: notification.success !== 0 ? 'success' : 'failed',
        notificationType: 'all',
    });
    return { ...savedNotification._doc, id: savedNotification.id, fcm_response: notification };
};

// export module
module.exports = {
    notifyAll,
};
