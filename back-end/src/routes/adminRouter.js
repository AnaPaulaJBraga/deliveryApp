const { Router } = require('express');
const { registerWithRole } = require('../controller/userController');
const { registerWithRoleValidator } = require('../middlewares/userValidator');

const adminRouter = Router();

adminRouter
  .post('/adminregister', registerWithRoleValidator, registerWithRole);

module.exports = adminRouter;