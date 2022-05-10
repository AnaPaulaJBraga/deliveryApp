const { Router } = require('express');
const { getById, create, getSaleDetail } = require('../controller/saleController');
const { getByCustomerId } = require('../controller/customerController');

const saleRouter = Router();

saleRouter
  .get('/sale/:id', getById)
  .get('/customer/:id', getByCustomerId)  
  .get('/saledetails/:id', getSaleDetail)
  .post('/sale', create);

module.exports = saleRouter;