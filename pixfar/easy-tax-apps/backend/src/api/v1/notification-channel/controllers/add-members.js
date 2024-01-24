const { catchAsync } = require('../../../../utils');
const notificationChannelService = require('../../../../lib/notification-channel');

const addMembers = catchAsync(async (req, res) => {
    // destructure the request params
    const { id } = req.params;

    // destructure the request body
    const { userIds } = req.body || {};

    // add the members
    await notificationChannelService.addMembers(id, userIds);

    // prepare the response
    const response = {
        code: 200,
        status: 'success',
        message: 'Members added successfully',
    };

    // send the response
    return res.status(200).json(response);
});

// export the module
module.exports = {
    addMembers,
};
