const { booleanify } = require(`./Booleanify`);

// SOURCE: https://github.com/mariusc23/express-query-boolean/blob/master/lib/parse.js

/**
 * Recursively test values for conversion.
 * @param  {?}  value  - String to convert
 * @return {?}  Returns the results of the conversion.
*/
function parseValue(value) {
  if (value !== null) {
    if (typeof value === `string`) {
      return booleanify(value);
    }
    else if (value.constructor === Object) {
      return parseObject(value);
    }
    else if (Array.isArray(value)) {
      const array = [];
      value.forEach((item, itemKey) => {
        array[itemKey] = parseValue(item);
      });
      return array;
    }

    return value;

  }
}

/**
 * Recursively convert object strings to boolean.
 * @param  {Object}  obj  - Object to iterate over
 * @return {Object}  Returns new object (shallow copy).
*/
function parseObject(obj) {
  const result = {};
  let key;
  let value;

  for (key in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(key)) {
      value = obj[key];
      result[key] = parseValue(value);
    }
  }

  return result;
}

const BooleanParser = (req, res, next) => {
  req.query = parseObject(req.query);
  req.body = parseObject(req.body);
  next();
};

module.exports = BooleanParser;
