const booleanify = (val) => {
  if (val === `true`) {
    return true;
  }
  else if (val === `false`) {
    return false;
  }
  return val;
};

module.exports = {
  booleanify,
};
