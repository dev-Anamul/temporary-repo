const express = require('express');
const townController = require('../controllers/town');

const router = express.Router();
router.route('/').get(townController.getAllTown).post(townController.createTown);

router
    .route('/:id')
    .get(townController.getTown)
    .patch(townController.updateTown)
    .delete(townController.deleteTown);

module.exports = router;
