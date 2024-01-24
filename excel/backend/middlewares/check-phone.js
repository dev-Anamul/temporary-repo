const UserAccount = require('../models/user-account');

exports.isPhoneExits = async (phone) => {
    try {
        const user = await UserAccount.findOne({ cellphone: phone });
        if (user) throw new Error('Phone already exits');
    } catch (error) {
        throw new Error(error.message);
    }
};
