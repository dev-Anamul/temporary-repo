/* eslint-disable object-curly-newline */
const { SupportMessage } = require('../../model');

const createSupportMessage = async ({ userId, message, email, subject, type, replyId }) => {
    const newSupportMessage = new SupportMessage({
        userId,
        email,
        subject,
        message,
        type,
        replyId: replyId || null,
    });

    return newSupportMessage.save();
};

//

module.exports = { createSupportMessage };
