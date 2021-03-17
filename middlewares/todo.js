import { todoTitleSchema } from '../validation';
import { todoService } from '../services';

const { getSingleTodo } = todoService;
const validateTodoTitle = (req, res, next) => {
  try {
    const { error } = todoTitleSchema.validate(req.body);
    if (!error) {
      return next();
    }
    return res.status(400).json({ status: 'fail', message: error.message });
  } catch (error) {
    return res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

const checkIfTodoExists = async (req, res, next) => {
  try {
    const selectedTodo = await getSingleTodo(req.params.todoId);
    if (selectedTodo) {
      req.todo = selectedTodo;
      return next();
    }
    return res.status(404).json({ status: 'fail', message: 'Todo does not exist.' });
  } catch (error) {
    return res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

const checkIfOwner = async (req, res, next) => {
  try {
    if (req.todo.user_id === req.user.id) {
      return next();
    }
    return res.status(404).json({ status: 'fail', message: 'Todo does not exist.' });
  } catch (error) {
    return res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

export {
  validateTodoTitle,
  checkIfTodoExists,
  checkIfOwner,
};
