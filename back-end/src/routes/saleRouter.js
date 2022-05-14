const { Router } = require('express');
const { getByCustomerId } = require('../controller/customerController');
const { getById, create, getSaleDetail, statusUpdate } = require('../controller/saleController');

const saleRouter = Router();

saleRouter
  .get('/sale/:id', getById)
  .get('/customer/:id', getByCustomerId)  
  .get('/saledetails/:id', getSaleDetail)
  .post('/sale', create)
  .put('/statusupdate', statusUpdate);

module.exports = saleRouter;