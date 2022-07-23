const { Sales } = require('../../database/models');

const ShowSaleService = async ({ id }) => {
  const sale = await Sales.findByPk(id);

  if (!sale) {
    return { error: 'Sale not found' };
  }

  return sale;
};

module.exports = ShowSaleService;
