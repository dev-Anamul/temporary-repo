const router = require('express').Router();

const assetsController = require('../../api/v1/asset');
const depreciationController = require('../../api/v1/depreciation');

// version route
router.get('/:id/depreciation', depreciationController.findDepreciationByAssets);

router.route('/').post(assetsController.addNewAsset).get(assetsController.findAssets);
router.route('/:id').patch(assetsController.updateAssets).delete(assetsController.deleteAsset);

// export router
module.exports = router;
