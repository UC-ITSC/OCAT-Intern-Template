import { NextFunction, Request, Response } from 'express';

/**
 * Recursively test values for conversion.
 * @param  {?}  value  - String to convert
 * @return {?}  Returns the results of the conversion.
*/
function parseValue(value: any): any {
  if (value !== null) {
    if (typeof value === `string`) {
      return booleanify(value);
    } else if (value.constructor === Object) {
      return parseObject(value);
    } else if (Array.isArray(value)) {
      const array: any[] = [];
      value.forEach((item, itemKey) => {
        array[itemKey] = parseValue(item);
      });
      return array;
    }

    return value;
  }
  return value;
}

/**
 * Recursively convert object strings to boolean.
 * @param  {Object}  obj  - Object to iterate over
 * @return {Object}  Returns new object (shallow copy).
*/
function parseObject(obj: any): any {
  const result: any = {};
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

const booleanify = (val: string): boolean | string => {
  if (val === `true`) {
    return true;
  } else if (val === `false`) {
    return false;
  }
  return val;
};

export const BooleanParser = (req: Request, res: Response, next: NextFunction) => {
  req.query = parseObject(req.query);
  req.body = parseObject(req.body);

  next();
};
