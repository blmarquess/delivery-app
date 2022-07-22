const { Router } = require('express');

const sellerRouter = Router();

sellerRouter.get('/', require('../controllers/sellersController'));

module.exports = sellerRouter;
