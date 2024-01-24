const { findSingleSupportMessage } = require('./find-single');

const markAsRead = async ({ id }) => {
    const message = await findSingleSupportMessage(id);

    if (!message) throw new Error('Message not found');

    message.isRead = true;
    message.replyId = message.replyId || null;

    await message.save();

    return message;
};

module.exports = { markAsRead };
