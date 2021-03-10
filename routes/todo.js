const { Router } = require('express');

const {
  createTodo,
  modifyTodo,
  getTodo,
  deleteSelectedTodo,
  allTodos,
} = require('../controllers');
const { validateTodoTitle, checkIfTodoExists } = require('../middlewares');

const todoRouter = Router();

// create todo
todoRouter.post('/todo', validateTodoTitle, createTodo);
todoRouter.put('/todo/:todoId', validateTodoTitle, modifyTodo);
todoRouter.get('/todo/:todoId', checkIfTodoExists, getTodo);
todoRouter.delete('/todo/:todoId', checkIfTodoExists, deleteSelectedTodo);
todoRouter.get('/todo', allTodos);

module.exports = todoRouter;
