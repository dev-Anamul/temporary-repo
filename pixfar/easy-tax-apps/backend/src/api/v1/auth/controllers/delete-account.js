const { deleteUserById } = require('../../../../lib/user');
const { catchAsync } = require('../../../../utils');

const deleteAccount = catchAsync(async (req, res) => {
    const { user } = req;
    const { id } = user;

    await deleteUserById(id);

    const response = {
        code: 200,
        status: 'success',
        message: 'User profile deleted successfully',
    };

    res.status(200).json(response);
});

module.exports = { deleteAccount };
