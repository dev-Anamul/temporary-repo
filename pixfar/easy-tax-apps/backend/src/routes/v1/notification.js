const router = require('express').Router();

const notificationController = require('../../api/v1/notifications');
const { authorize } = require('../../middleware/authorize');
const { imageFilter } = require('../../middleware/file-filter');
const { resizeImage } = require('../../middleware/resize-image');
const { uploadNotificationImage } = require('../../middleware/upload-file');

/// authorize('customer'),
router.use(authorize('customer'));

// routes for notification
router.post(
    '/users/many',
    uploadNotificationImage,
    imageFilter,
    resizeImage({ filePrefix: 'notification', folderName: 'notifications' }),
    notificationController.notifyMultiple
);

router.post(
    '/users/all',
    uploadNotificationImage,
    imageFilter,
    resizeImage({ filePrefix: 'notification', folderName: 'notifications' }),
    notificationController.notifyAll
);

router.post(
    '/users/:id',
    uploadNotificationImage,
    imageFilter,
    resizeImage({ filePrefix: 'notification', folderName: 'notifications' }),
    notificationController.notifySingle
);

router.get('/', notificationController.findAll);
router.patch('/:id/read', notificationController.updateNotificationStatus);
router.get('/:id', notificationController.findOneNotification);

module.exports = router;
