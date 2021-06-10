exports.handleServerError = (req, err, res, message = `An unknown error occurred`) => {
  res
    .status(500)
    .json({
      message,
      status: `ERROR`,
    });
};

exports.handleForbiddenError = (res, message = `You are not allowed to make this request`) => {
  res
    .status(403)
    .json({
      message,
      status: `FORBIDDEN`,
    });
};
