const { Sales } = require('../../database/models');

const updateStatusDelivered = async ({ id }) => {
  const sale = await Sales.findOne({ where: { id } });

  if (!sale) return { error: 'Sale not found' };

  const sellers = await Sales.update(
    { status: 'Entregue' },
    { where: { id } },
  );

  return sellers;
};

module.exports = updateStatusDelivered;
