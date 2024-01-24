const { AppError } = require('../../utils');
const { getUserById } = require('../user');
const { findNotificationChannelById } = require('./find-single');

const findChannelMembers = async (channelId) => {
    // find the channel
    const channel = await findNotificationChannelById({ id: channelId });

    // if there is no channel with this id, throw an error
    if (!channel) {
        throw new AppError('There is no channel with this id', 404, 'Not Found');
    }

    const members = Promise.all(channel?.members?.map((memberId) => getUserById(memberId)));

    // return the members
    return members;
};

module.exports = { findChannelMembers };
