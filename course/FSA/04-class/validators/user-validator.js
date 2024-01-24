const { body, query, param } = require("express-validator");

// create user validator
exports.createUserValidator = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .bail()
    .isString()
    .withMessage("Name must be a string"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .bail()
    .isEmail()
    .withMessage("Invalid email format"),
];

// update user validator
exports.updateUserValidator = [
  body("name")
    .optional()
    .trim()
    .isString()
    .withMessage("Name must be a string"),

  body("email")
    .optional()
    .trim()
    .isEmail()
    .withMessage("Invalid email format"),
];
