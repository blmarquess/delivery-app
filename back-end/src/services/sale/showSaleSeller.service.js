const { Sales, Products } = require('../../database/models');
const jwt = require('../../config/auth');
const normalize = require('../../config/normalize');

const findByIdBySeller = async ({ sellerId, saleId }) => {
  const sale = await Sales.findOne({
    where: { id: saleId, sellerId },
    include: [
      {
        model: Products,
        as: 'products',
        through: { attributes: ['quantity'], as: 'saleProduct' },
        attributes: { exclude: ['urlImage'] },
      },
    ],
    attributes: ['id', 'totalPrice', 'saleDate', 'status', 'deliveryAddress', 'deliveryNumber'],
  });

  return sale || null;
};

const ShowSaleSellerService = async ({ saleId, authorization }) => {
  const userData = jwt.verify(authorization);

  if (!userData) {
    throw new Error('User is not authenticated');
  }

  const sellerId = userData.id;
  const sale = await findByIdBySeller({ saleId, sellerId });

  if (!sale) {
    return { error: 'Sale not found' };
  }

  const saleFormated = normalize.SaleFormatter(sale);

  return (saleFormated);
};

module.exports = ShowSaleSellerService;
