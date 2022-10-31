import Joi from '@hapi/joi';

const registrationSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required(),
});

export { registrationSchema };