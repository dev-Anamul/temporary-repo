const express = require('express');
const homeLanguageController = require('../controllers/home-language');

const router = express.Router();

router
    .route('/')
    .get(homeLanguageController.getAllHomeLanguage)
    .post(homeLanguageController.createHomeLanguage);

router

    .route('/:id')
    .get(homeLanguageController.getHomeLanguage)
    .patch(homeLanguageController.updateHomeLanguage)
    .delete(homeLanguageController.deleteHomeLanguage);

module.exports = router;
