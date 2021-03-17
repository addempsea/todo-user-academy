const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

const { userRouter, todoRouter } = require('./routes');

const app = express();

app.use(express.json());
app.use(logger('dev'));

app.get('/', (req, res) => res.json({ welcome: 'hello' }));
app.use(userRouter);
app.use(todoRouter);

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
};

mongoose
  .connect(process.env.DATABASE_URI, options)
  .then(() => console.log('db connected'));

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${3000}`);
});
