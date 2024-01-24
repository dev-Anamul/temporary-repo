const router = require('express').Router();
const { authenticate } = require('../../middleware/authenticate');

router.use('/auth', require('./auth'));
router.use('/expenses', authenticate, require('./expense'));
router.use('/categories', authenticate, require('./category'));
router.use('/income-sources', authenticate, require('./income-source'));
router.use('/admin', authenticate, require('./admin'));
router.use('/ocr-expenses', authenticate, require('./ocr-expense'));
router.use('/notifications/channels', authenticate, require('./notification-channel'));
router.use('/notifications', authenticate, require('./notification'));
router.use('/dashboard', authenticate, require('./dashboard'));
router.use('/tax-slabs', authenticate, require('./tax-slab'));
router.use('/support-messages', authenticate, require('./support-message'));
router.use('/settings', require('./settings'));
router.use('/tax', authenticate, require('./tax'));
router.use('/fiscal-years', authenticate, require('./fiscal-year'));
router.use('/income-types', authenticate, require('./income-type'));
router.use('/assets', authenticate, require('./assets'));
router.use('/depreciation', authenticate, require('./depreciation'));

module.exports = router;
