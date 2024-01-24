const { findNotificationChannelById } = require('../../../../lib/notification-channel');
const { catchAsync, AppError } = require('../../../../utils');

const findOneChannel = catchAsync(async (req, res, next) => {
    // destructure the request params
    const { id } = req.params;

    // find the channel
    const channel = await findNotificationChannelById({ id });

    // if there is no channel with this id, throw an error
    if (!channel) {
        return next(new AppError('There is no channel with this id', 404, 'Not Found'));
    }

    // prepare the response
    const response = {
        code: 200,
        status: 'success',
        message: 'Channel found successfully',
        data: {
            channel,
        },
        links: {
            self: req.originalUrl,
            all_channels: '/api/v1/notification/channels',
        },
    };

    // send the response
    return res.status(200).json(response);
});

module.exports = {
    findOneChannel,
};
