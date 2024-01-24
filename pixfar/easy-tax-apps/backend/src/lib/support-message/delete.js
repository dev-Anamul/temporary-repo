const { AppError } = require('../../utils');
const { findSingleById } = require('./find-single');

const deleteSupportMessage = async (id) => {
    const supportMessage = await findSingleById(id);

    if (!supportMessage) throw new AppError('Support Message not found', 404, 'Not Found');

    return supportMessage.deleteOne();
};

module.exports = { deleteSupportMessage };
