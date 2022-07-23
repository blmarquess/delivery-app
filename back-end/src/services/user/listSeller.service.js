const { Users } = require('../../database/models');

const ListSellerService = async () => {
  const sellers = await Users.findAll({
    where: {
      role: 'seller',
    },
  });

  return sellers;
};

module.exports = ListSellerService;
