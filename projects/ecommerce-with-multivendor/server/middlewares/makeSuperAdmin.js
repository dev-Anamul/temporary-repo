const User = require('../models/userModel');

exports.makeSuperAdmin = catchAsync(async (req, res, next) => {
    // ! check if the user is logged in
    if (!req.user) {
        return next(new AppError('You are not logged in', 401));
    }

    // ! check there is any user in the database
    const users = await User.find();
    if (users.length === 0) {
        return next(new AppError('No user found in the database', 404));
    }

    // make the first user as super admin
    const firstUser = users[0];
    firstUser.role = 'superAdmin';
    await firstUser.save({ validateBeforeSave: false });

    res.status(200).json({
        status: 'success',
        message: 'The first user is now super admin',
    });
});
