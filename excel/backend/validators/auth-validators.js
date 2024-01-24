const { body } = require('express-validator');
const { isPhoneExits } = require('../middlewares/check-phone');
const { isUserNameExits } = require('../middlewares/check-username');

exports.singupValidator = [
    body('firstName')
        .trim()
        .notEmpty()
        .withMessage('First name is required')
        .isString()
        .withMessage('First name must be a string')
        .isLength({ max: 60 })
        .withMessage('First name must be less than or equal to 60 characters'),

    body('surname')
        .trim()
        .notEmpty()
        .withMessage('Surname is required')
        .isString()
        .withMessage('Surname must be a string')
        .isLength({ max: 60 })
        .withMessage('Surname must be less than or equal to 60 characters'),

    body('dob').notEmpty().withMessage('DOB is required'),

    body('sex')
        .notEmpty()
        .withMessage('Sex is required')
        .isIn(['Male', 'Female', 'Unknown'])
        .withMessage('Invalid value for Sex'),

    body('designation')
        .optional()
        .isString()
        .withMessage('Designation must be a string')
        .isLength({ max: 60 })
        .withMessage('Designation must be less than or equal to 60 characters'),

    body('nrc')
        .trim()
        .notEmpty()
        .withMessage('NRC is required')
        .isString()
        .withMessage('NRC must be a string')
        .isLength({ max: 11 })
        .withMessage('NRC must be less than or equal to 11 characters'),

    body('noNrc').optional().isBoolean().withMessage('Invalid value for NoNRC'),

    body('contactAddress')
        .trim()
        .notEmpty()
        .withMessage('Contact address is required')
        .isString()
        .withMessage('Contact address must be a string')
        .isLength({ max: 500 })
        .withMessage('Contact address must be less than or equal to 500 characters'),

    body('countryCode')
        .trim()
        .notEmpty()
        .withMessage('Country code is required')
        .isString()
        .withMessage('Country code must be a string')
        .isLength({ max: 4 })
        .withMessage('Country code must be less than or equal to 4 characters'),

    body('cellphone')
        .trim()
        .notEmpty()
        .withMessage('Cellphone number is required')
        .isString()
        .withMessage('Cellphone must be a string')
        .isLength({ max: 20 })
        .withMessage('Cellphone number must be less than or equal to 20 characters')
        .custom(isPhoneExits),

    body('userName')
        .trim()
        .notEmpty()
        .withMessage('Username is required')
        .isString()
        .withMessage('Username must be a string')
        .isLength({ max: 30 })
        .withMessage('Username must be less than or equal to 30 characters')
        .custom(isUserNameExits),

    body('password').notEmpty().withMessage('Password is required'),

    body('userType')
        .optional()
        .isIn(['Administrator', 'GeneralUser', 'Clinician'])
        .withMessage('Invalid value for UserType'),

    body('isAccountActive').optional().isBoolean().withMessage('Invalid value for IsAccountActive'),
];
exports.loginValidator = [
    body('userName')
        .trim()
        .notEmpty()
        .withMessage('Username is required')
        .isString()
        .withMessage('Username must be a string')
        .isLength({ max: 30 })
        .withMessage('Username must be less than or equal to 30 characters'),

    body('password').notEmpty().withMessage('Password is required'),
];
