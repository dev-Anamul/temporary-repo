const { catchAsync } = require('../../../../utils');
const notificationService = require('../../../../lib/notifications');

const notifyAll = catchAsync(async (req, res) => {
    const { title, body } = req.body || {};

    const notification = await notificationService.notifyAll({
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
    notifyAll,
};
