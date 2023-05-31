import Ajv, { ValidateFunction } from 'ajv';

const ajv = new Ajv();

const contactSchema = {
  type: 'object',
  properties: {
    'first-name': { type: 'string', minLength: 2 },
    'last-name': { type: 'string', minLength: 2 },
    subject: { type: 'string', minLength: 2 },
    message: { type: 'string', minLength: 10 },
  },
  required: ['first-name', 'last-name', 'subject', 'message'],
};

const validate: ValidateFunction = ajv.compile(contactSchema);

export { validate };
