const Schema = require('../lib/Schema');
const { ModelError } = require('../lib/Errors');

describe('Schema', () => {

  // add a test schema
  const schema = new Schema({
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    married: {
      type: Boolean,
      required: true
    },
    kids: {
      type: Number,
      required: true
    }
  });

  it('validates a correct model', () => {
    const model = {
      firstName: 'Chris',
      lastName: 'Sample',
      married: true,
      kids: 3
    };

    const record = schema.validate(model);

    expect(record).not.toBe(model);
    expect(record).toEqual(model);
  });

  it('throws on invalid model', () => {
    const model = {};

    expect(() => {
      schema.validate(model);
    }).toThrow(ModelError);
  });

  // more test cases...
});