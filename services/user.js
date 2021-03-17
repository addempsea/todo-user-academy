import { UserModel } from '../models';

export const addNewUser = (data) => UserModel.create(data);

export const getSingleUserByEmail = (email) => UserModel.findOne({ email });

export const findUserById = (userId) => UserModel.findById(userId);
