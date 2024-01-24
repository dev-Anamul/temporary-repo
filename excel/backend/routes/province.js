const express = require('express');
const proviceController = require('../controllers/province');

const router = express.Router();

router.route('/').get(proviceController.getAllProvince).post(proviceController.createProvince);

router
    .route('/:id')
    .get(proviceController.getProvince)
    .patch(proviceController.updateProvince)
    .delete(proviceController.deleteProvince);

module.exports = router;
