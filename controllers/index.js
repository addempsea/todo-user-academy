const { loginUser, registerUser } = require('./user');
const {
  createTodo,
  modifyTodo,
  getTodo,
  deleteSelectedTodo,
  allTodos,
} = require('./todo');

module.exports = {
  loginUser,
  registerUser,
  createTodo,
  modifyTodo,
  getTodo,
  deleteSelectedTodo,
  allTodos,
};
