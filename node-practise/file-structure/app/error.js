exports.notFound = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  error.status = 404;
  next(error);
};

exports.errorHandler = (error, _req, res, _next) => {
  const statusCode = error.status || 500;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === "production" ? "🥞" : error.stack,
  });
};
