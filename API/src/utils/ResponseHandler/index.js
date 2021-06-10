module.exports = (res, message, data = {}, next) => {
  res.json({
    data,
    message,
    status: `SUCCESS`,
  });

  next();
};
