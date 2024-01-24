/* eslint-disable object-curly-newline */
const { AppError } = require('../../utils');
const { sendNotificationToMultipleUsers } = require('../fcm-notification');
const { findNotificationTokens } = require('../user');
const { saveNotification } = require('./save-notification');

const notifyMultiple = async ({
    ids = [],
    title,
    body,
    imageUrl,
    isChannel = false,
    channelId,
}) => {
    // notification tokens of users
    const { tokens, userIds } = (await findNotificationTokens({ userIds: ids })) || {};

    // if user does not exist, throw error
    if (!tokens.length) throw new AppError('User not found', 404, 'Not Found');

    // send notification
    const notification = await sendNotificationToMultipleUsers({
        to: tokens,
        title,
        body,
        imageUrl,
    });

    if (!isChannel) {
        await Promise.all(
            userIds.map(async (userId) => {
                saveNotification({
                    title,
                    body,
                    imageUrl,
                    status: notification.success !== 0 ? 'success' : 'failed',
                    notificationType: 'single',
                    id: userId,
                });
            })
        );
    } else {
        // save notification to db
        await saveNotification({
            title,
            body,
            imageUrl,
            status: notification.success !== 0 ? 'success' : 'failed',
            channel: channelId,
            notificationType: 'channel',
        });
    }

    // return notification
    return { fcm_response: notification };
};

module.exports = {
    notifyMultiple,
};
