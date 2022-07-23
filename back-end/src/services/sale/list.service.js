const { Sales } = require('../../database/models');

const ListSaleService = async () => {
  const sales = await Sales.findAll();

  return sales;
};

module.exports = ListSaleService;
