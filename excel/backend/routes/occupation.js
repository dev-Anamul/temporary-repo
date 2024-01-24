const express = require('express');
const occupationController = require('../controllers/occupation');

const router = express.Router();

router
    .route('/')
    .get(occupationController.getAllOccupation)
    .post(occupationController.createOccupation);

router
    .route('/:id')
    .get(occupationController.getOccupation)
    .patch(occupationController.updateOccupation)
    .delete(occupationController.deleteOccupation);

module.exports = router;
