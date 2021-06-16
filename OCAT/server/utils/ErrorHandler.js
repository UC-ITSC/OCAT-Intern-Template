const handleForbiddenError = (err, req, res) => {
  console.warn(`${req.id} - 403 - Forbidden - ${req.url} - ${req.method}`); // eslint-disable-line no-console

  res
    .status(403)
    .json({
      message: `Forbidden`,
      status: `FORBIDDEN`,
    });
};

module.exports = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  if (err === `Unauthorized`) {
    return handleForbiddenError(err, req, res, next);
  }

  console.error(`${req.id} - ${err.status || 500} - ${err.message} - ${req.url} - ${req.method}`, err); // eslint-disable-line no-console

  res.status(err.statusCode || 500).json({
    message: `An unknown error occurred`,
    status: `ERROR`,
  });
};
