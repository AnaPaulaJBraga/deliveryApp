const { Router } = require('express');
const { getById, create, getSaleDetail, statusUpdate } = require('../controller/saleController');

const saleRouter = Router();

saleRouter
  .get('/sale/:id', getById)
  .post('/sale', create)
  .get('/saledetails/:id', getSaleDetail)
  .put('/statusupdate', statusUpdate);

module.exports = saleRouter;