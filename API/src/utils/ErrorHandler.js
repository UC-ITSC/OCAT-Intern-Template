class ErrorHandler {
  constructor(server) {
    // Documentation: http://restify.com/docs/server-api/#errors
    server.on(`Forbidden`, this.forbiddenErrorHandler);
    server.on(`restifyError`, this.defaultErrorHandler);
  }

  defaultErrorHandler(req, res, err, next) {
    if (err.message.includes(`Forbidden`)) { return next(); }
    console.log(`${req.id} - ${err.status} - ${err.message} - ${req.url} - ${req.method}`); // eslint-disable-line no-console

    return next();
  }

  forbiddenErrorHandler(req, res, err, next) {
    console.log(`${req.id} - ${err.status || 403} - ${err} - ${req.url} - ${req.method}`); // eslint-disable-line no-console

    return next();
  }
}
module.exports = ErrorHandler;
