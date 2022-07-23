const { Sales } = require('../../database/models');

const updateStatusPreparing = async ({ id }) => {
  const sale = await Sales.findOne({ where: { id } });

  if (!sale) return { error: 'Sale not found' };

  const sellers = await Sales.update(
    { status: 'Preparando' },
    { where: { id } },
  );

  return sellers;
};

module.exports = updateStatusPreparing;
