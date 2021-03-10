const express = require('express');
const logger = require('morgan');
const { userRouter, todoRouter } = require('./routes');

const app = express();

app.use(express.json());
app.use(logger('dev'));

app.get('/', (req, res) => res.json({ welcome: 'hello' }));
app.use(userRouter);
app.use(todoRouter);

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${3000}`);
});
