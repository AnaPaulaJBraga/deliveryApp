const md5 = require('md5');
const token = require('../schema/token');
const { User } = require('../database/models');

const login = async (user) => {
  const { email, password } = user;
  const hashPassword = md5(password);

  const userLogged = await User.findOne({
    where: { email, password: hashPassword },
    attributes: { exclude: ['password'] },
  });

  if (!userLogged) return { code: 404, message: 'Invalid fields' };

  const accessToken = token({ email, password });

  if (userLogged.role === 'administrator') {
    const users = await User.findAll();

    return { accessToken, users };
  }

  return { accessToken, userLogged };
};

const register = async (userInfo) => {
  const { name, email, password } = userInfo;
  const user = await User.findOne({
    where: { email },
  });

  if (!user) {
    const hashPassword = md5(password);
    const hashPasswordUser = { name, email, password: hashPassword, role: 'custumer' };
    const response = await User.create(hashPasswordUser);

    const accessToken = token({ email, password });

    return { accessToken, user: response.name };
  }

  return { code: 409, message: 'User already registered' };
};

module.exports = {
  login,
  register,
};