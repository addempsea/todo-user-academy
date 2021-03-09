const {
  addNewUser,
  getSingleUser,
  deleteUser,
  updateUserProfile,
} = require("./user");

const { addNewTodo, getSingleTodo, updateTodo, deleteTodo } = require("./todo");

module.exports = {
  addNewUser,
  getSingleUser,
  deleteUser,
  updateUserProfile,
  addNewTodo,
  getSingleTodo,
  updateTodo,
  deleteTodo,
};
