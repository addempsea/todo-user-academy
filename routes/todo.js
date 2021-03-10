const { Router } = require('express');

const {
  createTodo,
  modifyTodo,
  getTodo,
  deleteSelectedTodo,
  allTodos,
} = require('../controllers');
const { validateTodoTitle, checkIfTodoExists, authenticate } = require('../middlewares');

const todoRouter = Router();

todoRouter.use(authenticate);

// create todo
todoRouter.post('/todo', validateTodoTitle, createTodo);
todoRouter.use('/todo/:todoId', checkIfTodoExists);

todoRouter.put('/todo/:todoId', validateTodoTitle, modifyTodo);
todoRouter.get('/todo/:todoId', getTodo);
todoRouter.delete('/todo/:todoId', deleteSelectedTodo);

todoRouter.get('/todo', allTodos);

module.exports = todoRouter;
