const { Sales, SalesProducts } = require('../../database/models');

const CreateSaleService = async (
  { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, products }) => {
  const sale = await Sales.create({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
  });

  await Promise.all(products.map(async ({ id, quantity }) => {
    await SalesProducts.create({
      saleId: sale.id,
      productId: id,
      quantity,
    });
  }));

  return { sale };
};

module.exports = CreateSaleService;
