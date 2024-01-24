const { User } = require('../../model');
const { AppError, generateHash } = require('../../utils');
const { getUserByEmail } = require('./get-user');

const createUser = async ({
    firstName,
    middleName,
    lastName,
    email,
    mobile,
    dateOfBirth,
    password,
    address,
    employmentWorkType,
    notificationToken,
    notificationType,
    termsAndConditions,
    role,
    status,
}) => {
    const hasUser = await getUserByEmail(email);

    if (hasUser) throw new AppError('User already exists with this email', 400, 'Bad Request');

    // hash the password
    const hashedPassword = await generateHash(password);

    const user = new User({
        firstName,
        middleName,
        lastName,
        email,
        mobile,
        dateOfBirth,
        password: hashedPassword,
        address,
        employmentWorkType,
        notificationToken,
        notificationType,
        termsAndConditions,
        status,
        role: role || 'customer',
    });

    return user.save();
};

module.exports = {
    createUser,
};
