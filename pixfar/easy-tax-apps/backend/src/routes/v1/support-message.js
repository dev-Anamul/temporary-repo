const router = require('express').Router();

const supportMessageController = require('../../api/v1/support-message');

const { authorize } = require('../../middleware/authorize');

router.post('/:id/reply', authorize('admin'), supportMessageController.replyMessage);
router.post(
    '/:id/featured',
    authorize('admin'),
    supportMessageController.makeOrRemoveFeaturedController
);

router.post('/:id/read', authorize('admin'), supportMessageController.markAsReadController);

router
    .route('/')
    .post(authorize('customer'), supportMessageController.addSupportMessage)
    .get(authorize('admin'), supportMessageController.findAll);

router
    .route('/:id')
    .get(authorize('customer'), supportMessageController.findSingle)
    .delete(authorize('customer'), supportMessageController.deleteMessage);

module.exports = router;
