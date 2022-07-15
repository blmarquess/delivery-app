const userAdmin = {
  username: 'admin@admin.com',
  password: 'admin1234',
  role: 'admin',
  token: 'jwt-admin-token',
};

const userSeller = {
  username: 'seller@seller.com',
  password: 'seller1234',
  role: 'seller',
  token: 'swt-seller-token',
};

const userCustomer = {
  username: 'customer@customer.com',
  password: 'customer1234',
  role: 'customer',
  token: 'jwt-customer-token',
};

module.exports = [userAdmin, userSeller, userCustomer];
