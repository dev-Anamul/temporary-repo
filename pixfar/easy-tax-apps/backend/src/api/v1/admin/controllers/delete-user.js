const { deleteUserById } = require('../../../../lib/user');
const { catchAsync } = require('../../../../utils');

const deleteUser = catchAsync(async (req, res) => {
    // get id from params
    const { id } = req.params || {};

    // delete user
    await deleteUserById(id);

    // generate response
    const response = {
        code: 200,
        status: 'success',
        message: 'User deleted successfully',
    };

    // send response
    return res.status(200).json(response);
});

module.exports = { deleteUser };
