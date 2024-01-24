const router = require('express').Router();
const { authorize } = require('../../middleware/authorize');
const taxSlabController = require('../../api/v1/tax-slab');

router.use(authorize('admin'));

router.route('/').post(taxSlabController.createNewTaxSlab).get(taxSlabController.findAllTaxSlabs);

router
    .route('/:id')
    .get(taxSlabController.findSingleTaxSlab)
    .patch(taxSlabController.updateTaxSlab)
    .delete(taxSlabController.deleteTaxSlab);

module.exports = router;
