/* eslint-disable object-curly-newline */
const { NotificationChannel } = require('../../model');

const create = async ({ channelName, description, members, logo }) => {
    const newNotificationChannel = new NotificationChannel({
        channelName,
        description,
        members,
        logo,
    });

    const newChannel = await newNotificationChannel.save();

    return { ...newChannel._doc, id: newChannel.id };
};

module.exports = { create };
