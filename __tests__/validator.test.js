const validator = require('../lib/validator.js');

describe('validator module', () => {

  const str = 'yes';
  const num = 1;
  const arr = ['a'];
  const obj = { x: 'y' };
  const func = () => { };
  const bool = false;

  describe('performs basic validation of', () => {

    it('strings', () => {
      expect(validator.isString(str)).toBeTruthy();
      expect(validator.isString(num)).toBeFalsy();
      expect(validator.isString(arr)).toBeFalsy();
      expect(validator.isString(obj)).toBeFalsy();
      expect(validator.isString(func)).toBeFalsy();
      expect(validator.isString(bool)).toBeFalsy();
    });

    it('numbers', () => {
      expect(validator.isNumber(str)).toBeFalsy();
      expect(validator.isNumber(num)).toBeTruthy();
      expect(validator.isNumber(arr)).toBeFalsy();
      expect(validator.isNumber(obj)).toBeFalsy();
      expect(validator.isNumber(func)).toBeFalsy();
      expect(validator.isNumber(bool)).toBeFalsy();
    });

    it('arrays', () => {

      expect(validator.isArray(str)).toBeFalsy();
      expect(validator.isArray(num)).toBeFalsy();
      expect(validator.isArray(arr)).toBeTruthy();
      expect(validator.isArray(obj)).toBeFalsy();
      expect(validator.isArray(func)).toBeFalsy();
      expect(validator.isArray(bool)).toBeFalsy();

    });

    it('objects', () => {

      expect(validator.isObject(str)).toBeFalsy();
      expect(validator.isObject(num)).toBeFalsy();
      expect(validator.isObject(arr)).toBeFalsy();
      expect(validator.isObject(obj)).toBeTruthy();
      expect(validator.isObject(func)).toBeFalsy();
      expect(validator.isObject(bool)).toBeFalsy();

    });

    it('booleans', () => {

      expect(validator.isBoolean(str)).toBeFalsy();
      expect(validator.isBoolean(num)).toBeFalsy();
      expect(validator.isBoolean(arr)).toBeFalsy();
      expect(validator.isBoolean(obj)).toBeFalsy();
      expect(validator.isBoolean(func)).toBeFalsy();
      expect(validator.isBoolean(bool)).toBeTruthy();

    });

    it('functions', () => {

      expect(validator.isFunction(str)).toBeFalsy();
      expect(validator.isFunction(num)).toBeFalsy();
      expect(validator.isFunction(arr)).toBeFalsy();
      expect(validator.isFunction(obj)).toBeFalsy();
      expect(validator.isFunction(func)).toBeTruthy();
      expect(validator.isFunction(bool)).toBeFalsy();

    });
  });

  describe('performs array validation of', () => {

    const arrayOfStrings = ['a', 'b', 'c'];
    const arrayOfNumbers = [1, 2, 3];
    const arrayOfObjects = [{}, {}, {}];
    const arrayOfBooleans = [true, false, true];

    it('strings', () => {
      expect(validator.isArrayOfStrings(arrayOfStrings)).toBeTruthy();
      expect(validator.isArrayOfStrings(arrayOfNumbers)).toBeFalsy();
      expect(validator.isArrayOfStrings(arrayOfObjects)).toBeFalsy();
      expect(validator.isArrayOfStrings(arrayOfBooleans)).toBeFalsy();
    });

    it('numbers', () => {
      expect(validator.isArrayOfNumbers(arrayOfStrings)).toBeFalsy();
      expect(validator.isArrayOfNumbers(arrayOfNumbers)).toBeTruthy();
      expect(validator.isArrayOfNumbers(arrayOfObjects)).toBeFalsy();
      expect(validator.isArrayOfNumbers(arrayOfBooleans)).toBeFalsy();

    });

    it('objects', () => {
      expect(validator.isArrayOfObjects(arrayOfStrings)).toBeFalsy();
      expect(validator.isArrayOfObjects(arrayOfNumbers)).toBeFalsy();
      expect(validator.isArrayOfObjects(arrayOfObjects)).toBeTruthy();
      expect(validator.isArrayOfObjects(arrayOfBooleans)).toBeFalsy();

    });

    it('booleans', () => {
      expect(validator.isArrayOfBooleans(arrayOfStrings)).toBeFalsy();
      expect(validator.isArrayOfBooleans(arrayOfNumbers)).toBeFalsy();
      expect(validator.isArrayOfBooleans(arrayOfObjects)).toBeFalsy();
      expect(validator.isArrayOfBooleans(arrayOfBooleans)).toBeTruthy();

    });
  });

  describe('get validator for', () => {
    let rules = '';

    it('strings', () => {
      rules = 'string';
      expect(validator.getValidator(rules)).toBe(validator.isString);
    });

    it('numbers', () => {
      rules = 'number';
      expect(validator.getValidator(rules)).toBe(validator.isNumber);
    });

    it('arrays', () => {
      rules = 'array';
      expect(validator.getValidator(rules)).toBe(validator.isArray);
    });

    it('objects', () => {
      rules = 'object';
      expect(validator.getValidator(rules)).toBe(validator.isObject);
    });

    it('booleans', () => {
      rules = 'boolean';
      expect(validator.getValidator(rules)).toBe(validator.isBoolean);
    });

    it('functions', () => {
      rules = 'function';
      expect(validator.getValidator(rules)).toBe(validator.isFunction);
    });

    it('array of strings', () => {
      rules = 'array of strings';
      expect(validator.getValidator(rules)).toBe(validator.isArrayOfStrings);
    });

    it('array of numbers', () => {
      rules = 'array of numbers';
      expect(validator.getValidator(rules)).toBe(validator.isArrayOfNumbers);
    });

    it('array of objects', () => {
      rules = 'array of objects';
      expect(validator.getValidator(rules)).toBe(validator.isArrayOfObjects);
    });

    it('array of booleans', () => {
      rules = 'array of booleans';
      expect(validator.getValidator(rules)).toBe(validator.isArrayOfBooleans);
    });


  });

  describe('string caster', () => {

    const str = '20';
    const num = 1;
    const bool = false;
    // const date = new Date();

    it('should turn non-string to strings', () => {
      expect(validator.stringCaster(str)).toBe('20');
      expect(validator.stringCaster(num)).toBe('1');
      expect(validator.stringCaster(bool)).toBe('false');
      // expect(validator.stringCaster(date)).toMatch(/Pacific Daylight Time/);
    });

  });

  describe('number caster', () => {

    const str = '20';
    const bool = false;

    it('should turn non-number to numbers', () => {
      expect(validator.numberCaster(str)).toBe(20);
    });

    it('should throw a error because of a non-number', () => {
      expect(() =>{
        validator.numberCaster(bool);
      }).toThrow();
    });

  });

  describe('bool caster', () => {

    const str1 = 'true';
    const str2 = 'false';
    const str3 = 'apple';
    const num1 = 28;
    const num2 = 0;

    it('should turn non-bool to bool', () => {
      expect(validator.boolCaster(num1)).toBe(true);
      expect(validator.boolCaster(num2)).toBe(false);
    });

    it('should turn string to bool', () => {
      expect(validator.boolCaster(str1)).toBe(true);
      expect(validator.boolCaster(str2)).toBe(false);
    });

    it('should throw a wrong string', () => {
      expect(() =>{
        validator.boolCaster(str3);
      }).toThrow();
    });

  });

  describe('date caster', () => {

    const date1 = 'April 27 1990';
    const date2 = 1568790000000; 
    const date3 = 'banana';
    
    it('should turn input to date', () => {
      expect(String(validator.dateCaster(date1))).toMatch('Fri Apr 27 1990');
      expect(String(validator.dateCaster(date2))).toMatch('Wed Sep 18 2019');
    });

    it('should throw error because of invalid date', () => {
      expect(() =>{
        validator.dateCaster(date3);
      }).toThrow();
    });
  });
});