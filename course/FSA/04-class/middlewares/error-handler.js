const { CustomError } = require("../utils/custom-error");

exports.globalErrorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    res.status(err.statusCode).json({ error: err.message });
  } else {
    // Handle other types of errors or fallback to a generic error response
    res.status(500).json({ error: "Internal Server Error" });
  }
};
