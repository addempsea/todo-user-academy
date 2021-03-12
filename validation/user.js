const Joi = require('joi');

const signupSchema = Joi.object({
  firstName: Joi.string().min(3).max(100).required(),
  lastName: Joi.string().min(3).max(100).required(),
  password: Joi.string().min(7).required(),
  email: Joi.string().email().required(),
  gender: Joi.string().min(3).max(100),
});

const loginSchema = Joi.object({
  password: Joi.string().min(7).required(),
  email: Joi.string().email().required(),
});

module.exports = {
  signupSchema,
  loginSchema,
};
