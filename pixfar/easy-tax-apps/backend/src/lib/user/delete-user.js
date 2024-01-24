const { AppError } = require('../../utils');
const { getUserById } = require('./get-user');

const deleteUserById = async (id) => {
    const user = await getUserById(id);

    if (!user) throw new AppError('User not found', 404, 'Not Found');

    return user.deleteOne();
};

module.exports = { deleteUserById };
