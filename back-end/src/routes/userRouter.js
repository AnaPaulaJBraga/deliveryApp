const { Router } = require('express');
const {
  login,
  register,
  getAll,
  usersRole,
  getSellerById,
} = require('../controller/userController');
const { loginValidator, registerValidator } = require('../middlewares/userValidator');

const userRouter = Router();

userRouter
  .post('/login', loginValidator, login)
  .post('/register', registerValidator, register)
  .get('/users', getAll)
  .get('/users/:role', usersRole)
  .get('/seller/:id', getSellerById);

module.exports = userRouter;
