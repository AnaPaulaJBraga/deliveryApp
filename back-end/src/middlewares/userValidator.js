const { loginSchema, registerSchema } = require('../schema/userchema');

const loginValidator = async (req, res, next) => {
  const user = req.body;

  const validate = await loginSchema.validate(user);

  if (validate.error !== undefined) {
    return res.status(400).json({ message: validate.error.details[0].message });
  }
  next();
};

const registerValidator = async (req, res, next) => {
  const user = req.body;

  const validate = await registerSchema.validate(user);

  if (validate.error !== undefined) {
    return res.status(400).json({ message: validate.error.details[0].message });
  }
  next();
};

module.exports = {
  loginValidator,
  registerValidator,
};