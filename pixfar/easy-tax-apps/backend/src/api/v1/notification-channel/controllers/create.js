/* eslint-disable object-curly-newline */
const { catchAsync } = require('../../../../utils/catchAsync');
const notificationChannelService = require('../../../../lib/notification-channel');
const userService = require('../../../../lib/user');

const createChannel = catchAsync(async (req, res) => {
    // destructure the request body
    const { channelName, description, members } = req.body || {};

    // check members are exits or not
    const membersArray = members?.split(',') || [];

    console.log('members array =>', membersArray, 'members =>', members);

    // check the members are valid or not
    const foundMembers = await userService.checkUsers({ userIds: membersArray });

    // create the channel
    const newChannel = await notificationChannelService.create({
        channelName,
        description,
        members: foundMembers,
        logo: req.file?.filename ? `${process.env.APP_URL}/channels/${req.file.filename}` : null,
    });

    // prepare the response
    const response = {
        code: 201,
        status: 'success',
        message: 'Channel created successfully',
        data: {
            ...newChannel,
        },
        links: {
            self: req.originalUrl,
            all_channels: '/api/v1/notification/channels',
        },
    };

    // send the response
    res.status(201).json(response);
});

module.exports = {
    createChannel,
};
