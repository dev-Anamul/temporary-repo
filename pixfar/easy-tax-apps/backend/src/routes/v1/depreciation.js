const router = require('express').Router();

const depreciationController = require('../../api/v1/depreciation');
const { authorize } = require('../../middleware/authorize');

// version route
router.route('/').post(authorize('admin'), depreciationController.createDepreciation);

// export router
module.exports = router;
