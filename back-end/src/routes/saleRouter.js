const { Router } = require('express');
const { getById, create } = require('../controller/saleController');

const saleRouter = Router();

saleRouter
  .get('/sale/:id', getById)
  .post('/sale', create);

module.exports = saleRouter;