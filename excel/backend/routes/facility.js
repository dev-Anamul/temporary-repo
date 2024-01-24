const express = require('express');
const facilityController = require('../controllers/facility');

const router = express.Router();

router.route('/').get(facilityController.getAllFacility).post(facilityController.createFacility);

router
    .route('/:id')
    .get(facilityController.getFacility)
    .patch(facilityController.updateFacility)
    .delete(facilityController.deleteFacility);

module.exports = router;
