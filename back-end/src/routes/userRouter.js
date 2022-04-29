const { Router } = require('express');
const { login, register } = require('../controller/userController');
const { loginValidator, registerValidator } = require('../middlewares/userValidator');

const userRouter = Router();

userRouter
  .post('/login', loginValidator, login)
  .post('/register', registerValidator, register);

module.exports = userRouter;
