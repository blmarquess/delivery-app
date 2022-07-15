const Users = require('../../database/models/User');
const SalesProducts = require('../../database/models/SalesProducts');

const CreateSaleService = async ({
  user_id,
  seller_id,
  product_id,
  total_price,
  delivery_address,
  delivery_number,
  sale_date,
  status,
}) => {
  const customerExists = await Users.findByPk(user_id);

  if (customerExists) {
    return { error: 'Customer not found' };
  }

  const sellerExists = await Users.findByPk(seller_id);

  if (sellerExists) {
    return { error: 'Seller not found' };
  }

  const createdSale = await Users.create({
    user_id,
    seller_id,
    product_id,
    total_price,
    quantity,
    delivery_address,
    delivery_number,
    sale_date,
    status,
  });

  const createdSaleProduct = await SalesProducts.create({
    seller_id,
    product_id,
    quantity,
  });

  return { sale: createdSale, saleProduct: createdSaleProduct };
};

module.exports = CreateSaleService;
