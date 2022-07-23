const { Sales } = require('../../database/models');

const UpdateStatusDelivering = async ({ id }) => {
  const sale = await Sales.findOne({ where: { id } });

  if (!sale) return { error: 'Sale not found' };

  const sellers = await Sales.update(
    { status: 'Em trânsito' },
    { where: { id } },
  );

  return sellers;
};

module.exports = UpdateStatusDelivering;
