const express = require('express');
const educationLevelController = require('../controllers/education-level');

const router = express.Router();

router
    .route('/')
    .get(educationLevelController.getAllEducationLevel)
    .post(educationLevelController.createEducationLevel);

router
    .route('/:id')
    .get(educationLevelController.getEducationLevel)
    .patch(educationLevelController.updateEducationLevel)
    .delete(educationLevelController.deleteEducationLevel);

module.exports = router;
