const { catchAsync } = require('../../../../utils');
const notificationChannelService = require('../../../../lib/notification-channel');

const findChannelMembers = catchAsync(async (req, res) => {
    // destructure the request params
    const { id } = req.params;

    // find the channel members
    const members = await notificationChannelService.findChannelMembers(id);

    // prepare the response
    const response = {
        code: 200,
        status: 'success',
        message: 'Channel members retrieved successfully',
        data: [...members],
    };

    // send the response
    return res.status(200).json(response);
});

// export the module
module.exports = {
    findChannelMembers,
};
