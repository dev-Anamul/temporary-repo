const express = require('express');
const authController = require('../controllers/auth');
const authValidator = require('../validators/auth-validators');
const { checkValidationResult } = require('../middlewares/validation-result');

const router = express.Router();

router.post('/signup', authValidator.singupValidator, checkValidationResult, authController.signup);
router.post('/login', authValidator.loginValidator, checkValidationResult, authController.login);

module.exports = router;
