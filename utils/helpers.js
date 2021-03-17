import { sign, verify } from 'jsonwebtoken';
import { genSaltSync, hashSync, compareSync } from 'bcryptjs';
import { v4 as uuid } from 'uuid';
// eslint-disable-next-line no-unused-vars
import dotenv from 'dotenv/config';

const salt = genSaltSync(10);

const jwtSecret = process.env.JWT_SECRET;

const addDataToToken = (data) => sign(data, jwtSecret, { expiresIn: '1h' });

const verifyToken = (token) => verify(token, jwtSecret, (err, data) => ({ err, data }));

const hashPassword = (password) => hashSync(password, salt);
const comparePassword = (plainPassword, hashedPassword) => (
  compareSync(plainPassword, hashedPassword));

const generateUUID = () => uuid();

export {
  addDataToToken, verifyToken, comparePassword, hashPassword, generateUUID,
};
