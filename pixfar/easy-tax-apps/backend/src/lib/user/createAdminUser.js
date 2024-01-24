const { User } = require('../../model');
const { createUser } = require('./create-user');

// create admin user when application boots up
const createAdminUser = async () => {
    const isAnyAdminUser = await User.findOne({ role: 'admin' });

    if (isAnyAdminUser) return;

    await createUser({
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@gmail.com',
        mobile: '1234567890',
        password: 'admin',
        status: 'approved',
        role: 'admin',
        dateOfBirth: Date.now() - 100000000000,
        termsAndConditions: true,
    });
};

module.exports = {
    createAdminUser,
};
