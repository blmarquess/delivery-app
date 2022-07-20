const User = require('../../database/models/User');

const ShowUserService = async ({ id }) => {
  const user = await User.findByPk(id);

  if (!user) {
    return { error: 'User not found' };
  }

  return user;
};

module.exports = ShowUserService;
