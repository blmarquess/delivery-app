const { Router } = require('express');
const saleController = require('../controllers/sale.controller');

const saleRouter = Router();

saleRouter.post('/', saleController.create);

saleRouter.get('/', saleController.getAll);

module.exports = saleRouter;
