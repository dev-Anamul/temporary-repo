const { SupportMessage } = require('../../model');

const findSingleById = async (id) => SupportMessage.findById(id).populate('replies');

const findSingleSupportMessage = async (id) => SupportMessage.findById(id);

module.exports = { findSingleById, findSingleSupportMessage };
