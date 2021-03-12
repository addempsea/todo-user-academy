const { userArray } = require('../models');
const db = require('../db/setup');
const { insertUser, fetchUserByEmail, fetchUserById } = require('../db/queries/user');
const { generateUUID } = require('../utils');

const addNewUser = async (data) => {
  const id = generateUUID();
  const {
    email, firstName, lastName, password, gender,
  } = data;
  return db.one(insertUser, [id, firstName, lastName, email, password, gender]);
};

// user/:userId
const getSingleUserById = async (id) => db.oneOrNone(fetchUserById, [id]);

const getSingleUserByEmail = async (email) => db.oneOrNone(fetchUserByEmail, [email]);

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
