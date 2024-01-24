const express = require('express');
const recoveryRequestController = require('../controllers/recovery-request');

const router = express.Router();

router
    .route('/')
    .get(recoveryRequestController.getAllRecoveryRequest)
    .post(recoveryRequestController.createRecoveryRequest);

router
    .route('/:id')
    .get(recoveryRequestController.getRecoveryRequest)
    .patch(recoveryRequestController.updateRecoveryRequest)
    .delete(recoveryRequestController.deleteRecoveryRequest);

module.exports = router;
