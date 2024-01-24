const { catchAsync } = require('../../../../utils');
const notificationService = require('../../../../lib/notifications');

const notifyMultiple = catchAsync(async (req, res) => {
    const { title, body, ids } = req.body || {};

    const notification = await notificationService.notifyMultiple({
        ids: ids.split(','), // convert ids to array
        title,
        body,
        imageUrl: req?.file?.filename
            ? `${process.env.APP_URL}/notifications/${req?.file?.filename}`
            : null,
    });

    res.status(201).json({
        code: 201,
        status: 'success',
        data: {
            notification,
        },
    });
});

module.exports = {
    notifyMultiple,
};
