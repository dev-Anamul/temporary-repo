const { AppError } = require('../../utils');
const { findSingleSupportMessage } = require('./find-single');

const makeOrRemoveFeatured = async ({ id, featured }) => {
    // if id is not provided, throw error
    if (!id) throw new AppError('Please provide id', 400, 'Bad Request');

    // if featured is not provided, throw error
    if (typeof featured !== 'boolean') {
        throw new AppError('Please provide featured', 400, 'Bad Request');
    }

    // find support message
    const supportMessage = await findSingleSupportMessage(id);

    // if support message does not exist, throw error
    if (!supportMessage) throw new AppError('Support message not found', 404, 'Not Found');

    // update support message
    supportMessage.isFeatured = featured;
    supportMessage.replyId = supportMessage.replyId || null;

    // save support message
    const updatedSupportMessage = await supportMessage.save();

    return updatedSupportMessage;
};

module.exports = {
    makeOrRemoveFeatured,
};
