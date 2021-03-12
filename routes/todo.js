const { Router } = require('express');

const {
  createTodo,
  modifyTodo,
  getTodo,
  deleteSelectedTodo,
  allTodos,
  getUserTodos,
  updateTodoStatus,
} = require('../controllers');
const {
  validateTodoTitle, checkIfTodoExists, authenticate, adminAccessValidator, checkIfOwner,
} = require('../middlewares');

const todoRouter = Router();

todoRouter.use(authenticate);

// create todo
todoRouter.post('/todo', validateTodoTitle, createTodo);

todoRouter.use('/todo/:todoId', checkIfTodoExists, checkIfOwner);
todoRouter.put('/todo/:todoId', validateTodoTitle, modifyTodo);
todoRouter.get('/todo/:todoId', getTodo);
todoRouter.patch('/todo/:todoId', updateTodoStatus);
todoRouter.delete('/todo/:todoId', deleteSelectedTodo);

todoRouter.get('/todo', getUserTodos);
todoRouter.get('/todos', adminAccessValidator, allTodos);

module.exports = todoRouter;
