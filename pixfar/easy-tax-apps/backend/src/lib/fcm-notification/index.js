const sendNotificationToSingleUser = require('./to-single');
const sendNotificationToMultipleUsers = require('./to-multiple');

module.exports = {
    ...sendNotificationToSingleUser,
    ...sendNotificationToMultipleUsers,
};
