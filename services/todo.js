const { v4: uuidv4 } = require('uuid');
const { todoArray } = require('../models');

const addNewTodo = (data, owner) => {
  const id = uuidv4();
  const obj = {
    ...data,
    id,
    isCompleted: false,
    ownerEmail: owner,
  };
  todoArray.push(obj);
  return obj;
};

const getSingleTodo = (id) => todoArray.find((el) => el.id === id);

const findTodoIndex = (id) => todoArray.findIndex((el) => el.id === id);

const updateTodo = (data, id) => {
  const todoDetails = getSingleTodo(id);
  const updatedTodo = { ...todoDetails, ...data };
  const index = findTodoIndex(id);
  todoArray[index] = updatedTodo;
  return updatedTodo;
};

const deleteTodo = (id) => {
  const index = findTodoIndex(id);
  return todoArray.splice(index, 1);
};

const getAllTodos = () => todoArray;
const getAllTodosForSingleUser = (email) => todoArray.filter((el) => el.ownerEmail === email);

module.exports = {
  addNewTodo,
  getSingleTodo,
  updateTodo,
  deleteTodo,
  getAllTodos,
  getAllTodosForSingleUser,
};
