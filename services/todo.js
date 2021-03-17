import {
  fetchTodoById,
  updateTodoById,
  deleteTodoById,
  fetchTodos,
  updateTodoByIdToCompleted,
} from '../db/queries/todo';
import db from '../db/setup';
import { TodoModel } from '../models';

// const addNewTodo = async (data) => {
//   const id = generateUUID();
//   const { title, userId } = data;
//   return db.one(insertTodo, [id, title, userId]);
// };

const addNewTodo = async (data) => TodoModel.create(data);

const getSingleTodo = async (todoId) => db.oneOrNone(fetchTodoById, [todoId]);
// const getSingleTodoById = async (todoId) => TodoModel.findById(todoId)

const updateTodo = async (title, todoId) => db.one(updateTodoById, [title, todoId]);
// TodoModel.findOneAndUpdate({id})

const deleteTodo = async (todoId) => db.none(deleteTodoById, [todoId]);
// TodoModel.findOneAndRemove()

const getAllTodos = async () => db.manyOrNone(fetchTodos);
// TodoModel.find()

// const getAllTodosForSingleUser = async (userId) => db.manyOrNone(fetchSingleUserTodos, [userId]);
const getAllTodosForSingleUser = async (userId) => TodoModel.find({ user: userId }).populate('user');

const updateTodoToCompleted = async (todoId, isComplete) => (
  db.none(updateTodoByIdToCompleted, [todoId, isComplete]));

export {
  addNewTodo,
  getSingleTodo,
  updateTodo,
  deleteTodo,
  getAllTodos,
  getAllTodosForSingleUser,
  updateTodoToCompleted,
};
