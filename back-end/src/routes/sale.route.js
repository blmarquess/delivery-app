const { Router } = require('express');
const saleController = require('../controllers/sale.controller');

const saleRouter = Router();

saleRouter.route('/')
  .post(saleController);

module.exports = saleRouter;
