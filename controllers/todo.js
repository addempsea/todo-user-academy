const {
  addNewTodo,
  updateTodo,
  getSingleTodo,
  deleteTodo,
  getAllTodos,
  getAllTodosForSingleUser,
} = require('../services');

const createTodo = (req, res) => {
  try {
    const todo = addNewTodo(req.body, req.user.email);
    res
      .status(201)
      .json({
        status: 'success',
        message: 'Todo added successfully.',
        data: todo,
      });
  } catch (error) {
    res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

const modifyTodo = (req, res) => {
  try {
    updateTodo(req.body, req.params.todoId);
    res
      .status(201)
      .json({ status: 'success', message: 'Todo edited successfully.' });
  } catch (error) {
    res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

const getTodo = (req, res) => {
  try {
    const currentTodo = getSingleTodo(req.params.todoId);
    res
      .status(200)
      .json({ status: 'success', message: 'Todo fetched ', data: currentTodo });
  } catch (error) {
    res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

const allTodos = (req, res) => {
  try {
    const todoList = req.user.isAdmin
      ? getAllTodos()
      : getAllTodosForSingleUser(req.user.email);
    res.status(200).json({
      status: 'success',
      message: 'Todo array fetched ',
      data: todoList,
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Something went wrong while fetching todos.',
    });
  }
};

const deleteSelectedTodo = (req, res) => {
  try {
    deleteTodo(req.params.todoId);
    res.status(200).json({ status: 'success', message: 'Todo deleted ' });
  } catch (error) {
    res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

module.exports = {
  createTodo,
  modifyTodo,
  getTodo,
  deleteSelectedTodo,
  allTodos,
};
