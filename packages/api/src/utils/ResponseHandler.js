module.exports = (res, message, data = {}) => {
  res.status(200);
  res.json({
    data,
    message,
    status: `SUCCESS`,
  });
};
