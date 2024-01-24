const update = require('./update-user');
const createUser = require('./create-user');
const getUser = require('./get-user');
const remove = require('./delete-user');
const findAll = require('./find-all');
const findNotificationTokens = require('./find-notification-token');
const checkUser = require('./check-user');

module.exports = {
    ...update,
    ...createUser,
    ...getUser,
    ...remove,
    ...findAll,
    ...findNotificationTokens,
    ...checkUser,
};
