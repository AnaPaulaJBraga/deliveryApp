const user = require('../service/userService');

const login = async (req, res) => {
  const userInfo = req.body;
  const userLogged = await user.login(userInfo);

  if (userLogged.code !== undefined) {
    return res.status(userLogged.code).json({ messasge: userLogged.message });
  }
  res.status(200).json(userLogged);
};

const register = async (req, res) => {
  const userInfo = req.body;
  const result = await user.register(userInfo);

  if (result.code !== undefined) return res.status(result.code).json({ message: result.message });

  res.status(201).json(result);
};

const registerWithRole = async (req, res) => {
  const userInfo = req.body;
  // console.log('\n\n in Controller: UserInfo!', userInfo);
  const result = await user.registerWithRole(userInfo);

  if (result.code !== undefined) return res.status(result.code).json({ message: result.message });

  res.status(201).json({ message: 'user created' });
};

const getAll = async (req, res) => {
  const response = await user.getAll();

  res.status(200).json(response);
};

module.exports = {
  login,
  register,
  registerWithRole,
  getAll,
};
