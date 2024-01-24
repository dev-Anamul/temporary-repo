const { catchAsync } = require('../../../../utils/catchAsync');
const notificationService = require('../../../../lib/notifications');

const notifySingle = catchAsync(async (req, res) => {
    const { id } = req.params;
    const { title, body } = req.body || {};

    const notification = await notificationService.notifySingle({
        id,
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
    notifySingle,
};
