const express = require('express');
const nextOfKinController = require('../controllers/next-of-kin');

const router = express.Router();

router
    .route('/')
    .get(nextOfKinController.getAllNextOfKin)
    .post(nextOfKinController.createNextOfKin);

router
    .route('/:id')
    .get(nextOfKinController.getNextOfKin)
    .patch(nextOfKinController.updateNextOfKin)
    .delete(nextOfKinController.deleteNextOfKin);

module.exports = router;
