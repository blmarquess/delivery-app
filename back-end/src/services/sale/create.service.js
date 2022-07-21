const { Sales, SalesProducts } = require('../../database/models');

const CreateSaleService = async (
  { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, products }) => {
  /* const customerExists = await Users.findByPk(userId);

  if (!customerExists) return { message: 'Customer not found' };

  const sellerExists = await Users.findByPk(sellerId);

  if (!sellerExists) return { message: 'Seller not found' }; */

  console.log('antes sale');

  const sale = await Sales.create({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
  });

  console.log('apos sale', sale);

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
