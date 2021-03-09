const { todoArray } = require("../models");
const { v4: uuidv4 } = require("uuid");

const addNewTodo = (data) => {
  const id = uuidv4();
  todoArray.push({...data, id});
};

const updateTodo = (data, id) => {
  const todoDetails = todoArray.find((el) => el.id === id);
  const updatedTodo = { ...todoDetails, ...data };
  const index = todoArray.findIndex((el) => el.id === id);
  todoDetails[index] = updatedTodo;
  return updatedTodo;
};

const getSingleTodo = (id) => todoArray.find((el) => el.id === id);

const deleteTodo = (id) => {
  const index = todoArray.findIndex((el) => el.id === id);
  return todoArray.splice(index, 1);
};

module.exports = {
  addNewTodo,
  getSingleTodo,
  updateTodo,
  deleteTodo,
};
