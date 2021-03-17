import { sign, verify } from 'jsonwebtoken';
import { genSaltSync, hashSync, compareSync } from 'bcryptjs';
import { v4 as uuid } from 'uuid';
import cloudinary from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const cloudinaryConfig = async (filePath) => {
  try {
    const data = await cloudinary.v2.uploader.upload(filePath);
    return data;
  } catch (error) {
    return error;
  }
};

const salt = genSaltSync(10);

const jwtSecret = process.env.JWT_SECRET;

const addDataToToken = (data) => sign(data, jwtSecret, { expiresIn: '1h' });

const verifyToken = (token) => verify(token, jwtSecret, (err, data) => ({ err, data }));

const hashPassword = (password) => hashSync(password, salt);
const comparePassword = (plainPassword, hashedPassword) => (
  compareSync(plainPassword, hashedPassword));

const generateUUID = () => uuid();

export {
  addDataToToken, verifyToken, comparePassword, hashPassword, generateUUID, cloudinaryConfig,
};
