const { User } = require('../../model');
const { getUsersBelongToIds } = require('./get-user');

const findNotificationTokens = async ({ userIds = [] }) => {
    const users = await getUsersBelongToIds(userIds, { notificationToken: 1 });

    const notificationTokens = users.map((user) => user.notificationToken);

    const userIdsFromDb = users.map((user) => user._id);

    return { tokens: notificationTokens, userIds: userIdsFromDb };
};

// all notification tokens
const allNotificationTokens = async () => {
    const users = await User.find({}, { notificationToken: 1 });

    const notificationTokens = users.map((user) => user.notificationToken);

    return notificationTokens;
};

module.exports = {
    findNotificationTokens,
    allNotificationTokens,
};
