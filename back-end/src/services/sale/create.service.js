const Users = require('../../database/models/User');
const SalesProducts = require('../../database/models/SalesProducts');

const CreateSaleService = async (sale) => {
  const customerExists = await Users.findByPk(sale.userId);

  if (customerExists) {
    return { error: 'Customer not found' };
  }

  const sellerExists = await Users.findByPk(sale.sellerId);

  if (sellerExists) {
    return { error: 'Seller not found' };
  }

  const createdSale = await Users.create(sale);

  const createdSaleProduct = await SalesProducts.create({
    sellerId: sale.sellerId,
    productId: sale.productId,
    quantity: sale.quantity,
  });

  return { sale: createdSale, saleProduct: createdSaleProduct };
};

module.exports = CreateSaleService;
