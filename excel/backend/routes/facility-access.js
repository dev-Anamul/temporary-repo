const express = require('express');
const facilityAccessController = require('../controllers/facility-access');
const facilityAccessValidator = require('../validators/facilityAccess-validator');
const { checkValidationResult } = require('../middlewares/validation-result');

const router = express.Router();

router.post('/approve', facilityAccessController.approveFacilityAccess);

router
    .route('/')
    .post(
        facilityAccessValidator.createFacilityAccessValidator,
        checkValidationResult,
        facilityAccessController.createFacilityAccess
    )
    .get(facilityAccessController.getAllFacilityAccess);

router
    .route('/:id')
    .get(facilityAccessController.getFacilityAccess)
    .patch(facilityAccessController.updateFacilityAccess)
    .delete(facilityAccessController.deleteFacilityAccess);

module.exports = router;
