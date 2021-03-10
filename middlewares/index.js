const { validateSignup, validateLogin, checkIfUserExists } = require('./user');
const { validateTodoTitle, checkIfTodoExists } = require('./todo');

module.exports = {
  validateLogin,
  validateSignup,
  checkIfUserExists,
  validateTodoTitle,
  checkIfTodoExists,
};
