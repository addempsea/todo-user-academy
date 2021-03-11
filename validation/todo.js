const Joi = require('joi');

const todoTitleSchema = Joi.object({
  title: Joi.string().min(3).max(70).required(),
});

module.exports = todoTitleSchema;
