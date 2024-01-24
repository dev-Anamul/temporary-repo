const UserAccount = require('../models/user-account');

exports.isUserNameExits = async (userName) => {
    try {
        const user = await UserAccount.findOne({ userName });
        if (user) throw new Error('Username already exits');
    } catch (error) {
        throw new Error(error.message);
    }
};
