const { catchAsync } = require('../../../../utils');

const getProfile = catchAsync(async (req, res) => {
    const { user } = req;

    const response = {
        code: 200,
        status: 'success',
        message: 'Profile fetched successfully',
        data: {
            user,
        },

        links: {
            self: req.originalUrl,
        },
    };
    res.status(200).json(response);
});

module.exports = { getProfile };
