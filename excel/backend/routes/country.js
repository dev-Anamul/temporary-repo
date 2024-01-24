const express = require('express');
const countryController = require('../controllers/country');
const countryValidator = require('../validators/country-validator');
const { checkValidationResult } = require('../middlewares/validation-result');

const router = express.Router();

router
    .route('/')
    .get(countryController.getAllCountry)
    .post(
        countryValidator.createCountryValidationRules,
        checkValidationResult,
        countryController.createCountry
    );

router
    .route('/:id')
    .get(countryController.getCountry)
    .patch(countryController.updateCountry)
    .delete(countryController.deleteCountry);

module.exports = router;
