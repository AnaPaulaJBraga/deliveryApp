const express = require('express');
const cors = require('cors');
const userRouter = require('../routes/userRouter');
const productRouter = require('../routes/productRouter');

const app = express();

app.use(cors());
app.use(express.json());

app.use(userRouter);
app.use(productRouter);

module.exports = app;
