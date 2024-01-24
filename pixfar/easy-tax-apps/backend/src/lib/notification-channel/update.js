/* eslint-disable object-curly-newline */
const { AppError } = require('../../utils/AppError');
const { findNotificationChannelById } = require('./find-single');

const updateChannel = async ({ channelId, channelName, description, logo }) => {
    // Find the channel by id
    const channel = await findNotificationChannelById({ id: channelId });

    // If there is no channel with this id, throw an error
    if (!channel) {
        throw new AppError('There is no channel with this id', 404, 'Not Found');
    }

    // Update the channel
    channel.channelName = channelName || channel.channelName;
    channel.description = description || channel.description;
    channel.logo = logo || channel.logo;

    // Save the channel
    return channel.save();
};

module.exports = { updateChannel };
