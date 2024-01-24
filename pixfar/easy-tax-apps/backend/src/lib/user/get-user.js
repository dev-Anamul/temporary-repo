const { User } = require('../../model');

const getUserById = async (id) => {
    const user = await User.findById(id);
    return user;
};

const getUserByEmail = async (email) => {
    const user = await User.findOne({ email });
    return user;
};

const getUsersBelongToIds = async (userIds, options = {}) => {
    if (!Array.isArray(userIds)) throw new Error('userIds must be an array');

    const users = await User.find({ _id: { $in: userIds } }, options);

    return users;
};

module.exports = {
    getUserById,
    getUserByEmail,
    getUsersBelongToIds,
};
