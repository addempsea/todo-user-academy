const { userArray } = require("../models");
const { v4: uuidv4 } = require("uuid");

const addNewUser = (data) => {
  userArray.push({ ...data, id: uuidv4() });
};

const updateUserProfile = (data, id) => {
  const userDetails = userArray.find((el) => el.id === id);
  const updatedProfile = { ...userDetails, ...data };
  const index = userArray.findIndex((el) => el.id === id);
  userDetails[index] = updatedProfile;
  return updatedProfile;
};

const getSingleUser = (id) => userArray.find((el) => el.id === id);

const deleteUser = (id) => {
  const index = userArray.findIndex((el) => el.id === id);
  return userArray.splice(index, 1);
};

module.exports = {
  addNewUser,
  getSingleUser,
  deleteUser,
  updateUserProfile,
};
