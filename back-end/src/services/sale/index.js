const create = require('./create.service');
const list = require('./list.service');
const showSale = require('./showSale.service');
const ShowSaleCustomerService = require('./showSaleCustomer.service');
const updateStatusPreparing = require('./updateStatusPreparing.service');
const updateStatusDelivering = require('./updateStatusDelivering.service');
const updateStatusDelivered = require('./updateStatusDelivered.service');

module.exports = {
  create,
  list,
  showSale,
  ShowSaleCustomerService,
  updateStatusPreparing,
  updateStatusDelivering,
  updateStatusDelivered,
};
