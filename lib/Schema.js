/* import and use validators */
const { getCaster } = require('./validator');
const { ModelError, CastError } = require('./Errors');

class Schema {
  /**
   * Create a model schema
   * @param {object} schema - the schema to apply to models
   */
  constructor(schema) {
    this.schema = schema;
  }

  /**
   * Run validation on the supplied model 
   * @param {object} model - the model to validate
   * @throws {ModelError} throws if model does not conform to schema
   * @returns {object} - validated data record
   */

  validate(model) {
    const data = {};
    const errors = [];

    Object.entries(this.schema).forEach(([key, rule]) => {
      const value = model[key];
      
      if(value === undefined) {
        if(rule.required) {
          errors.push(`field ${key} is required`);
        }
        return;
      }

      const caster = getCaster(rule.type);    
      try {
        data[key] = caster(model[key]);
      }
      catch(err) {
        if(err instanceof CastError) {
          errors.push(err.message);
        }
        else {
          throw err;
        }
      }

    });

    if(errors.length > 0) {
      throw new ModelError(errors);
    }

    return data;
  }
}

module.exports = Schema;