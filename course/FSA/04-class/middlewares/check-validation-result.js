const { validationResult } = require("express-validator");

exports.checkValidationResult = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    // organize errors
    const errorsArray = errors.array().reduce((acc, error) => {
      acc[error.path] = error.msg;
      return acc;
    }, {});

    // return error response if validation failed
    return res.status(400).json(errorsArray);
  }

  next();
};
