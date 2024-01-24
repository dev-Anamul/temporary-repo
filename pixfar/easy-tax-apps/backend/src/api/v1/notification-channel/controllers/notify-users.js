const { catchAsync } = require('../../../../utils');
const notificationChannelService = require('../../../../lib/notification-channel');

const notifyChannelUsers = catchAsync(async (req, res) => {
    // destructure the request body
    const { title, body } = req.body;
    const { id } = req.params || {};

    // update the channel
    const notification = await notificationChannelService.notifyChannelUsers({
        channelId: id,
        title,
        body,
        imageUrl: req.file?.filename
            ? `${process.env.APP_URL}/notifications/${req.file?.filename}`
            : null,
    });
    // prepare the response
    const response = {
        code: 200,
        status: 'success',
        message: 'notification sent successfully',
        data: {
            ...notification,
        },
    };

    // send the response
    return res.status(200).json(response);
});

// export the module
module.exports = {
    notifyChannelUsers,
};
