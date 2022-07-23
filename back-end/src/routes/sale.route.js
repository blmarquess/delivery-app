const { Router } = require('express');
const saleController = require('../controllers/sale.controller');

const saleRouter = Router();

saleRouter.route('/')
  .get(saleController.getAll)
  .post(saleController.create);

saleRouter.route('/preparing/:id')
  .patch(saleController.updateStatusPreparing);

saleRouter.route('/delivering/:id')
  .patch(saleController.updateStatusDelivering);

saleRouter.route('/delivered/:id')
  .patch(saleController.updateStatusDelivered);

module.exports = saleRouter;
