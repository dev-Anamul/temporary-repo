const { catchAsync } = require('../../../../utils');
const notificationChannelService = require('../../../../lib/notification-channel');

const deleteChannel = catchAsync(async (req, res) => {
    // destructure the request params
    const { id } = req.params;

    // delete the channel
    await notificationChannelService.removeNotificationChannel(id);

    // prepare the response
    const response = {
        code: 200,
        status: 'success',
        message: 'Channel deleted successfully',
    };

    // send the response
    return res.status(200).json(response);
});

// export the module
module.exports = {
    deleteChannel,
};
