const notifySingle = require('./notify-single');
const notifyMultipleUser = require('./notify-multiple');
const notifyAll = require('./notify-all');
const findAll = require('./find-all');
const findSingleById = require('./find-single');
const update = require('./update');

module.exports = {
    ...notifySingle,
    ...notifyMultipleUser,
    ...notifyAll,
    ...findAll,
    ...findSingleById,
    ...update,
};
