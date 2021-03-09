const {
  addNewUser,
  getSingleUserById,
  getSingleUserByEmail,
  deleteUser,
  updateUserProfile,
} = require("./user");

const { addNewTodo, getSingleTodo, updateTodo, deleteTodo } = require("./todo");

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
};
