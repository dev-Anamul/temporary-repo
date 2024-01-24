const { body } = require('express-validator');

exports.createFacilityAccessValidator = [
    body('userAccountID')
        .notEmpty()
        .withMessage('User account ID is required')
        .isMongoId()
        .withMessage('Invalid user account ID'),

    body('createdIn')
        .notEmpty()
        .withMessage('Created in is required')
        .isInt()
        .withMessage('Invalid created in value'),
];
