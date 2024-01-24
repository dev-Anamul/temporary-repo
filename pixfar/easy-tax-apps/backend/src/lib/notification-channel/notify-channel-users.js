/* eslint-disable object-curly-newline */
const { AppError } = require('../../utils');
const { notifyMultiple } = require('../notifications/notify-multiple');

const { findNotificationChannelById } = require('./find-single');

const notifyChannelUsers = async ({ channelId, title, body, imageUrl }) => {
    // find the channel
    const channel = await findNotificationChannelById({ id: channelId });

    // if there is no channel with this id, throw an error
    if (!channel) {
        throw new AppError('There is no channel with this id', 404, 'Not Found');
    }

    console.log(imageUrl);
    // send the notification
    return notifyMultiple({
        ids: channel.members,
        title,
        body,
        imageUrl,
        isChannel: true,
        channelId,
    });
};

module.exports = { notifyChannelUsers };
