const { Users } = require('../../database/models');

const getAllSellers = async () => {
  const result = await Users.findAll({
        where: {
            role: 'seller',
        },
    });

    return result;
};

module.exports = getAllSellers;
