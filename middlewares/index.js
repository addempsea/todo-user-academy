const { validateSignup, validateLogin, checkIfUserExists } = require('./user');
const { validateTodoTitle, checkIfTodoExists } = require('./todo');
const { authenticate } = require('./auth');

module.exports = {
  validateLogin,
  validateSignup,
  checkIfUserExists,
  validateTodoTitle,
  checkIfTodoExists,
  authenticate,
};
