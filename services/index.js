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
};
