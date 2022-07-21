const { Users } = require('../../database/models');

const ListUserService = async () => {
  const users = await Users.findAll();

  return users;
};

module.exports = ListUserService;
