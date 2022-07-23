const { Router } = require('express');

const routerApp = Router();

routerApp.use('/login', require('./login.route'));

routerApp.use('/products', require('./product.route'));

routerApp.use('/sales', require('./sale.route'));

routerApp.use('/users', require('./user.route'));

routerApp.use('/sellers', require('./seller.route'));

module.exports = routerApp;
