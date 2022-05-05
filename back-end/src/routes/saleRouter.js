const { Router } = require('express');
const { getById } = require('../controller/saleController');

const saleRouter = Router();

saleRouter.get('/sale/:id', getById);

module.exports = saleRouter;