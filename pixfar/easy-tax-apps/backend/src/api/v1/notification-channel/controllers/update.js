const { catchAsync } = require('../../../../utils');
const notificationChannelService = require('../../../../lib/notification-channel');

const updateChannel = catchAsync(async (req, res) => {
    // destructure the request body
    const { channelName, description } = req.body;
    const { id } = req.params || {};
    const logo = req.file?.filename ? `${process.env.APP_URL}/channels/${req.file.filename}` : null;

    console.log(id);

    // update the channel
    await notificationChannelService.updateChannel({
        channelId: id,
        channelName,
        description,
        logo,
    });

    // prepare the response
    const response = {
        code: 200,
        status: 'success',
        message: 'Channel updated successfully',
    };

    // send the response
    return res.status(200).json(response);
});

// export the module
module.exports = {
    updateChannel,
};
