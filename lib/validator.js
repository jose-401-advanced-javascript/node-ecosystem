
/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
const isString = input => {
  return typeof input === 'string';
};

/**
 * Is this a number?
 * @param input
 * @returns {boolean}
 */
const isNumber = input => {
  return typeof input === 'number';
};

/**
 * Is this an array?
 * @param input
 * @returns {boolean}
 */
const isArray = input => {
  return Array.isArray(input);
};

/**
 * Is this an object?
 * @param input
 * @returns {boolean}
 */
const isObject = input => {
  return (Array.isArray(input) ? false : typeof input === 'object');
};

/**
 * Is this a boolean?
 * @param input
 * @returns {boolean}
 */
const isBoolean = input => {
  return typeof input === 'boolean';
};

/**
 * Is this a function?
 * @param input
 * @returns {boolean}
 */
const isFunction = input => {
  return typeof input === 'function';
};

/**
 * Is this an array of strings?
 * @param {array} input 
 * @returns {boolean}
 */
const isArrayOfStrings = array => {
  return array.every(isString);
};

/**
 * Is this an array of numbers?
 * @param {array} input 
 * @returns {boolean}
 */
const isArrayOfNumbers = array => {
  return array.every(isNumber);
};

/**
 * Is this an array of objects?
 * @param {array} input 
 * @returns {boolean}
 */
const isArrayOfObjects = array => {
  return array.every(isObject);
};

/**
 * Is this an array of booleans?
 * @param {array} input 
 * @returns {boolean}
 */
const isArrayOfBooleans = array => {
  return array.every(isBoolean);
};

/**
 * Based on a set of rules, what is correct validator?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param rules
 * @returns {boolean}
 */
const getValidator = rules => {
  if(rules === 'string') {
    return isString;
  }
  if(rules === 'number') {
    return isNumber;
  }
  if(rules === 'array') {
    return isArray;
  }
  if(rules === 'object') {
    return isObject;
  }
  if(rules === 'boolean') {
    return isBoolean;
  }
  if(rules === 'function') {
    return isFunction;
  }
  if(rules === 'array of strings') {
    return isArrayOfStrings;
  }
  if(rules === 'array of numbers') {
    return isArrayOfNumbers;
  }
  if(rules === 'array of objects') {
    return isArrayOfObjects;
  }
  if(rules === 'array of booleans') {
    return isArrayOfBooleans;
  }
};

module.exports = {
  isString,
  isNumber,
  isArray,
  isObject,
  isBoolean,
  isFunction,
  isArrayOfStrings,
  isArrayOfNumbers,
  isArrayOfObjects,
  isArrayOfBooleans,
  getValidator
};