/* eslint-disable no-underscore-dangle */
const { AppError } = require('../../utils');
const { getUserByEmail, createUser } = require('../user');

const signup = async ({
    firstName,
    middleName,
    lastName,
    mobile,
    dateOfBirth,
    email,
    notificationToken,
    notificationType,
    address,
    employmentWorkType,
    password,
    termsAndConditions,
}) => {
    // check if any user exists with the same email
    const hasUser = await getUserByEmail(email);

    // todo: change the error message
    if (hasUser) throw new AppError('User already exists with this email', 400, 'Bad Request');

    // create a new user
    const newUser = await createUser({
        firstName,
        middleName,
        lastName,
        mobile,
        dateOfBirth,
        email,
        notificationToken,
        notificationType,
        address,
        employmentWorkType,
        password,
        termsAndConditions,
    });

    return { ...newUser._doc, id: newUser._id, password: undefined };
};

module.exports = {
    signup,
};
