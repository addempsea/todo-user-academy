const {
  addNewUser,
  getSingleUserById,
  getSingleUserByEmail,
  deleteUser,
  updateUserProfile,
} = require('./user');

const {
  addNewTodo,
  getSingleTodo,
  updateTodo,
  deleteTodo,
  getAllTodos,
  updateTodoToCompleted,
  getAllTodosForSingleUser,
} = require('./todo');

module.exports = {
  addNewUser,
  getSingleUserById,
  getSingleUserByEmail,
  deleteUser,
  updateUserProfile,
  addNewTodo,
  getSingleTodo,
  updateTodo,
  deleteTodo,
  getAllTodos,
  getAllTodosForSingleUser,
  updateTodoToCompleted,
};
