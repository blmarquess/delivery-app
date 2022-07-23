module.exports = {
  SaleFormatter: ({ dataValues }) => {
    const products = dataValues.products.map(
      ({ id, name, price, saleProduct }) => ({
        id,
        name,
        price,
        quantity: saleProduct.quantity,
      }),
    );

    return {
      ...dataValues,
      products,
    };
  },
};
