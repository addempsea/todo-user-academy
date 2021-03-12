const { generateUUID } = require('../utils');
const {
  insertTodo, fetchTodoById, updateTodoById, deleteTodoById, fetchTodos, fetchSingleUserTodos,
  updateTodoByIdToCompleted,
} = require('../db/queries/todo');
const db = require('../db/setup');

const addNewTodo = async (data) => {
  const id = generateUUID();
  const { title, userId } = data;
  return db.one(insertTodo, [id, title, userId]);
};

const getSingleTodo = async (todoId) => db.oneOrNone(fetchTodoById, [todoId]);

const updateTodo = async (title, todoId) => db.one(updateTodoById, [title, todoId]);

const deleteTodo = async (todoId) => db.none(deleteTodoById, [todoId]);

const getAllTodos = async () => db.manyOrNone(fetchTodos);

const getAllTodosForSingleUser = async (userId) => db.manyOrNone(fetchSingleUserTodos, [userId]);

const updateTodoToCompleted = async (todoId, isComplete) => (
  db.none(updateTodoByIdToCompleted, [todoId, isComplete]));

module.exports = {
  addNewTodo,
  getSingleTodo,
  updateTodo,
  deleteTodo,
  getAllTodos,
  getAllTodosForSingleUser,
  updateTodoToCompleted,
};
