const { Router } = require('express');
const productController = require('../controllers/product.controller');

const productRouter = Router();

productRouter.route('/')
  .get(productController.list);

productRouter.route('/:id')
  .get(productController.show);

module.exports = productRouter;
