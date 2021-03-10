const { todoTitleSchema } = require('../validation');
const { getSingleTodo } = require('../services');

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

const checkIfTodoExists = (req, res, next) => {
  try {
    const selectedTodo = getSingleTodo(req.params.todoId);
    if (selectedTodo) {
      return next();
    }
    return res.status(404).json({ status: 'fail', message: 'Todo does not exist.' });
  } catch (error) {
    return res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

module.exports = {
  validateTodoTitle,
  checkIfTodoExists,
};
