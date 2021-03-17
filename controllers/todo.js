import { todoService } from '../services';

const {
  addNewTodo,
  updateTodo,
  deleteTodo,
  getAllTodos,
  getAllTodosForSingleUser,
  updateTodoToCompleted,
} = todoService;
const createTodo = async (req, res) => {
  try {
    const todo = await addNewTodo({ title: req.body.title, user: req.user.id });
    res.status(201).json({
      status: 'success',
      message: 'Todo added successfully.',
      data: todo,
    });
  } catch (error) {
    res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

const modifyTodo = async (req, res) => {
  try {
    await updateTodo(req.body.title, req.params.todoId);
    res
      .status(200)
      .json({ status: 'success', message: 'Todo edited successfully.' });
  } catch (error) {
    res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

const getTodo = async (req, res) => {
  try {
    res
      .status(200)
      .json({ status: 'success', message: 'Todo fetched ', data: req.todo });
  } catch (error) {
    res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

const allTodos = async (req, res) => {
  try {
    const todoList = await getAllTodos();
    res.status(200).json({
      status: 'success',
      message: 'Todos fetched successfully.',
      data: todoList,
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Something went wrong while fetching todos.',
    });
  }
};

const getUserTodos = async (req, res) => {
  try {
    const todos = await getAllTodosForSingleUser(req.user.id);
    res.status(200).json({
      status: 'success',
      message: 'Todos fetched successfully.',
      data: todos,
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Something went wrong while fetching todos.',
    });
  }
};

const deleteSelectedTodo = async (req, res) => {
  try {
    await deleteTodo(req.params.todoId);
    res.status(200).json({ status: 'success', message: 'Todo deleted ' });
  } catch (error) {
    res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

const updateTodoStatus = async (req, res) => {
  try {
    const status = !req.todo.is_complete;
    await updateTodoToCompleted(req.params.todoId, status);
    res
      .status(200)
      .json({
        status: 'success',
        message: 'Todo status updated successfully.',
      });
  } catch (error) {
    res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

export {
  createTodo,
  modifyTodo,
  getTodo,
  deleteSelectedTodo,
  allTodos,
  getUserTodos,
  updateTodoStatus,
};
