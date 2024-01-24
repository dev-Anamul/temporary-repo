const { AppError } = require('../../utils');
const { getUserById, getUserByEmail } = require('./get-user');

const updateUserById = async ({
    id,
    firstName,
    middleName,
    lastName,
    email,
    mobile,
    dateOfBirth,
    address,
    employmentWorkType,
    notificationToken,
    notificationType,
    role,
    status,
    irdNumber,
    avatar,
}) => {
    const user = await getUserById(id);

    if (!user) throw new AppError('User not found', 404, 'Not Found');

    user.firstName = firstName || user.firstName;
    user.middleName = middleName; // middleName can be empty
    user.lastName = lastName || user.lastName;
    user.email = email || user.email;
    user.mobile = mobile || user.mobile;
    user.dateOfBirth = dateOfBirth || user.dateOfBirth;
    user.address = address || user.address;
    user.employmentWorkType = employmentWorkType || user.employmentWorkType;
    user.notificationToken = notificationToken || user.notificationToken;
    user.notificationType = notificationType || user.notificationType;
    user.role = role || user.role;
    user.status = status || user.status;
    user.avatar = avatar || user.avatar;
    user.irdNumber = irdNumber || user.irdNumber;

    return user.save();
};

const updateUserPassword = async (email, password) => {
    const user = await getUserByEmail(email);

    if (!user) throw new AppError('User not found', 404, 'Not Found');

    user.password = password;
    user.passwordChangedAt = Date.now();

    return user.save();
};

// const update user notification token
const updateUserNotificationToken = async (email, notificationToken) => {
    const user = await getUserByEmail(email);

    if (!user) throw new AppError('User not found', 404, 'Not Found');

    user.notificationToken = notificationToken;

    return user.save();
};

module.exports = {
    updateUserById,
    updateUserPassword,
    updateUserNotificationToken,
};
