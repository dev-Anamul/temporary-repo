const express = require('express');
const districtController = require('../controllers/district');

const router = express.Router();

router.route('/').get(districtController.getAllDistrict).post(districtController.createDistrict);

router
    .route('/:id')
    .get(districtController.getDistrict)
    .patch(districtController.updateDistrict)
    .delete(districtController.deleteDistrict);

module.exports = router;
