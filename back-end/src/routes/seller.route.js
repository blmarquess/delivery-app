const { Router } = require('express');
const userController = require('../controllers/user.controller');

const sellerRouter = Router();

sellerRouter.route('/')
  .get(userController.listSeller);

module.exports = sellerRouter;
