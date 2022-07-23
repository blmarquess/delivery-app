const create = require('./create.service');
const list = require('./list.service');
const showSale = require('./showSale.service');
const showSaleCustomer = require('./showSaleCustomer.service');
const showSaleSeller = require('./showSaleSeller.service');
const updateStatusPreparing = require('./updateStatusPreparing.service');
const updateStatusDelivering = require('./updateStatusDelivering.service');
const updateStatusDelivered = require('./updateStatusDelivered.service');

module.exports = {
  create,
  list,
  showSale,
  showSaleCustomer,
  showSaleSeller,
  updateStatusPreparing,
  updateStatusDelivering,
  updateStatusDelivered,
};
