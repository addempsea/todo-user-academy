const { v4: uuid } = require('uuid');
const { userArray } = require('../models');

const addNewUser = (data) => {
  userArray.push({ ...data, id: uuid(), isAdmin: false });
};
// user/:userId
const getSingleUserById = (id) => userArray.find((el) => el.id === id);

const getSingleUserByEmail = (email) => userArray.find((el) => el.email === email);

const getUserIndex = (id) => userArray.findIndex((el) => el.id === id);

const updateUserProfile = (data, id) => {
  const userDetails = getSingleUserById(id);
  const updatedProfile = { ...userDetails, ...data };
  const index = getUserIndex(id);
  userArray[index] = updatedProfile;
  return updatedProfile;
};
// method delete user/:userId
const deleteUser = (id) => {
  const index = getUserIndex(id);
  return userArray.splice(index, 1);
};

module.exports = {
  addNewUser,
  deleteUser,
  updateUserProfile,
  getSingleUserById,
  getSingleUserByEmail,
};
