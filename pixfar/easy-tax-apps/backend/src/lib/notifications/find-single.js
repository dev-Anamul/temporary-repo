const { Notification } = require('../../model');

const findSingleById = async (id) => Notification.findById(id);

module.exports = { findSingleById };
