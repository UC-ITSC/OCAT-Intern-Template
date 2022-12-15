const ErrorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  // eslint-disable-next-line no-console
  console.error(`${req.method} ${req.url}`, err);

  res.status(err.statusCode || 500).json({ message: err.message, status: err.statusCode });
};

module.exports = ErrorHandler;
