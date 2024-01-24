const { AppError } = require('../../utils');
const { findNotificationChannelById } = require('./find-single');

const addMembers = async (channelId, members = []) => {
    // find the channel
    const channel = await findNotificationChannelById({ id: channelId });

    // if there is no channel with this id, throw an error
    if (!channel) {
        throw new AppError('There is no channel with this id', 404, 'Not Found');
    }

    const stringId = members.map((member) => member.toString());
    const channelMembers = channel.members.map((member) => member.toString());

    // add the members
    channel.members = [...new Set([...channelMembers, ...stringId])];

    // save the channel
    return channel.save();
};

module.exports = { addMembers };
