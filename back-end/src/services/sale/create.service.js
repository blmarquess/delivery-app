const { Sales, SalesProducts } = require('../../database/models');

const CreateSaleService = async (
  { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, products }) => {
  /* const customerExists = await Users.findByPk(userId);

  if (!customerExists) return { message: 'Customer not found' };

  const sellerExists = await Users.findByPk(sellerId);

  if (!sellerExists) return { message: 'Seller not found' }; */

  const sale = await Sales.create({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
  });

  await Promise.all(products.map(async ({ productId, quantity }) => {
    await SalesProducts.create({
      saleId: sale.id,
      productId,
      quantity,
    });
  }));
  return { sale };
};

module.exports = CreateSaleService;
