const { body } = require('express-validator');

exports.createCountryValidationRules = () => [
    body('countryName')
        .trim()
        .notEmpty()
        .withMessage('Country name is required')
        .isString()
        .withMessage('Country name must be a string')
        .isLength({ max: 90 })
        .withMessage('Country name must be less than or equal to 90 characters'),

    body('isoCodeAlpha2')
        .trim()
        .notEmpty()
        .withMessage('ISO code alpha-2 is required')
        .isString()
        .withMessage('ISO code alpha-2 must be a string')
        .isLength({ max: 2 })
        .withMessage('ISO code alpha-2 must be less than or equal to 2 characters'),

    body('countryCode')
        .trim()
        .notEmpty()
        .withMessage('Country code is required')
        .isString()
        .withMessage('Country code must be a string')
        .isLength({ max: 4 })
        .withMessage('Country code must be less than or equal to 4 characters'),

    body('createdIn').optional().isMongoId().withMessage('Invalid faclity ID for created in'),

    body('dateCreated').optional().isISO8601().withMessage('Invalid date format for date created'),
    body('createdBy').optional().isMongoId().withMessage('Invalid user ID for created by'),
    body('modifiedIn').optional().isInt().withMessage('Modified in must be an integer'),
    body('dateModified')
        .optional()
        .isISO8601()
        .withMessage('Invalid date format for date modified'),
    body('modifiedBy').optional().isMongoId().withMessage('Invalid user ID for modified by'),
    body('isDeleted').optional().isBoolean().withMessage('Is deleted must be a boolean'),
    body('isSynced').optional().isBoolean().withMessage('Is synced must be a boolean'),
];
