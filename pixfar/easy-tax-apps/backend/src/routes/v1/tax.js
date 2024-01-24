const router = require('express').Router();
const taxController = require('../../api/v1/tax');
const { authorize } = require('../../middleware/authorize');

router.get('/', taxController.userTax);

router.get('/users/:userId', authorize('customer'), taxController.adminTax);

module.exports = router;
