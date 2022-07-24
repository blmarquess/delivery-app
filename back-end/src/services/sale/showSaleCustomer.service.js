const { Sales, Users, Products } = require('../../database/models');
const jwt = require('../../config/auth');
const normalize = require('../../config/normalize');

const findByIdByCostumer = async ({ saleId, costumerId }) => {
  const sale = await Sales.findOne({
    where: { id: saleId, userId: costumerId },
    include: [
      {
        model: Users,
        as: 'seller',
        attributes: ['id', 'name'],
      },
      {
        model: Products,
        as: 'products',
        through: { attributes: ['quantity'], as: 'saleProduct' },
        attributes: { exclude: ['urlImage'] },
      },
    ],
    attributes: ['id', 'totalPrice', 'saleDate', 'status'],
  });

  return sale || null;
};

const ShowSaleCustomerService = async ({ saleId, authorization }) => {
  const userData = jwt.verify(authorization);

  if (!userData) {
    throw new Error('User is not authenticated');
  }

  const costumerId = userData.id;
  const sale = await findByIdByCostumer({ saleId, costumerId });

  if (!sale) {
    return { error: 'Sale not found' };
  }

  const saleFormated = normalize.SaleFormatter(sale);

  return (saleFormated);
};

module.exports = ShowSaleCustomerService;
