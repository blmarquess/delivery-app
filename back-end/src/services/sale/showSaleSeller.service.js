const { Sales, Products } = require('../../database/models');
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
    attributes: ['id', 'totalPrice', 'saleDate', 'status'],
  });

  return sale || null;
};

const ShowSaleSellerService = async ({ saleId, sellerId }) => {
  const sale = await findByIdBySeller({ saleId, sellerId });

  if (!sale) {
    return { error: 'Sale not found' };
  }

  const saleFormated = normalize.SaleFormatter(sale);

  return (saleFormated);
};

module.exports = ShowSaleSellerService;
