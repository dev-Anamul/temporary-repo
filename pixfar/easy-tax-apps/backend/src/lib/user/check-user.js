const { getUsersBelongToIds } = require('./get-user');

//

const checkUsers = async ({ userIds = [] }) => {
    const users = await getUsersBelongToIds(userIds, { notificationToken: 1 });

    const notFoundUsers = userIds.filter(
        (userId) => !users.find((user) => user._id.toString() === userId)
    );

    if (notFoundUsers.length) {
        throw new Error(`Users with ids ${notFoundUsers.join(', ')} not found`);
    }

    return users.map((user) => user._id.toString());
};

module.exports = { checkUsers };
