const { AppError } = require('../../utils');
const { findNotificationChannelById } = require('./find-single');

const removeMember = async (channelId, userId) => {
    // find the channel
    const channel = await findNotificationChannelById({ id: channelId });

    // if there is no channel with this id, throw an error
    if (!channel) {
        throw new AppError('There is no channel with this id', 404, 'Not Found');
    }

    // check if the user is a member of the channel
    if (!channel.members.includes(userId)) {
        throw new AppError('This user is not a member of this channel', 400, 'Bad Request');
    }

    // remove the member
    channel.members = channel.members.filter((member) => member.toString() !== userId);

    // save the channel
    return channel.save();
};

module.exports = { removeMember };
