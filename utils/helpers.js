const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtSecret = process.env.JWT_SECRET;

const addDataToToken = (data) => jwt.sign(data, jwtSecret, { expiresIn: '1hr' });

const verifyToken = (token) => jwt.verify(token, jwtSecret);

module.exports = { addDataToToken, verifyToken };
