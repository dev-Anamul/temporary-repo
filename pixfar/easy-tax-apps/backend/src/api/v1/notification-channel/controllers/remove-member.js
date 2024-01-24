const { catchAsync } = require('../../../../utils');
const notificationChannelService = require('../../../../lib/notification-channel');

const removeMember = catchAsync(async (req, res) => {
    // destructure the request params
    const { id, userId } = req.params;

    // remove the member
    await notificationChannelService.removeMember(id, userId);

    // prepare the response
    const response = {
        code: 200,
        status: 'success',
        message: 'Member removed successfully',
    };

    // send the response
    return res.status(200).json(response);
});

// export the module
module.exports = {
    removeMember,
};
