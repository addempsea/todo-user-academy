const Joi = require("joi");
const { signupSchema, loginSchema } = require("../validation");
const { getSingleUserByEmail } = require("../services");

const validateSignup = (req, res, next) => {
  try {
    const { error } = signupSchema.validate(req.body);
    if (!error) {
      return next();
    }
    res.status(400).json({ status: "fail", message: error.message });
  } catch (error) {
    res.status(500).json({ status: "fail", message: "Something went wrong." });
  }
};

const validateLogin = (req, res, next) => {
  try {
    const { error } = loginSchema.validate(req.body);
    if (!error) {
      return next();
    }
    res.status(400).json({ status: "fail", message: error.message });
    return next();
  } catch (error) {
    res.status(500).json({ status: "fail", message: "Something went wrong." });
  }
};

const checkIfUserExists = (req, res, next) => {
  try {
    const user = getSingleUserByEmail(req.body.email);
    if (!user) {
      return next();
    }
    res.status(409).json({ status: "fail", message: "user exists already." });
  } catch (error) {
    res.status(500).json({ status: "fail", message: "Something went wrong." });
  }
};

module.exports = {
  checkIfUserExists,
  validateLogin,
  validateSignup,
};
