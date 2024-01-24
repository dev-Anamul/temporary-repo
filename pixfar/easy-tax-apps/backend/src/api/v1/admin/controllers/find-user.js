const { getUserById } = require('../../../../lib/user');
const { catchAsync, AppError } = require('../../../../utils');

const findSingleUser = catchAsync(async (req, res, next) => {
    const { id } = req.params || {};

    const user = await getUserById(id);
    if (!user) return next(new AppError('No user found with this ID', 404, 'Not Found'));

    // generate response
    const response = {
        code: 200,
        status: 'success',
        message: 'User fetched successfully',
        data: user,
        links: {
            self: req.originalUrl + user._id,
        },
    };

    return res.status(200).json(response);
});

module.exports = { findSingleUser };
