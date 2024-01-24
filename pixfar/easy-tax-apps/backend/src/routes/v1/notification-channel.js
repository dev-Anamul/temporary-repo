const router = require('express').Router();

const notificationChannelController = require('../../api/v1/notification-channel');
const { authorize } = require('../../middleware/authorize');
const { imageFilter } = require('../../middleware/file-filter');
const { resizeImage } = require('../../middleware/resize-image');
const {
    uploadNotificationChannelImage,
    uploadNotificationImage,
} = require('../../middleware/upload-file');

authorize('admin');

// channel users specific routes
router
    .route('/:id/users')
    .get(notificationChannelController.findChannelMembers)
    .post(notificationChannelController.addMembers);

router.route('/:id/users/:userId').delete(notificationChannelController.removeMember);

// notify users
router.post(
    '/:id/notify',
    uploadNotificationImage,
    imageFilter,
    resizeImage({ filePrefix: 'notification', folderName: 'notifications' }),
    notificationChannelController.notifyChannelUsers
);

// routes for notification channel
router
    .route('/')
    .post(
        uploadNotificationChannelImage,
        imageFilter,
        resizeImage({ filePrefix: 'channel', folderName: 'channels' }),
        notificationChannelController.createChannel
    )
    .get(notificationChannelController.findAll);

router
    .route('/:id')
    .get(notificationChannelController.findOneChannel)
    .patch(
        uploadNotificationChannelImage,
        imageFilter,
        resizeImage({ filePrefix: 'channel', folderName: 'channels' }),
        notificationChannelController.updateChannel
    )
    .delete(notificationChannelController.deleteChannel);

module.exports = router;
