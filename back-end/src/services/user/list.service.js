const crypto = require('crypto');
const User = require('../../database/models/User');

const ListUserService = async () => {
  const users = await User.findAll();

  return users;
};

module.exports = ListUserService;
