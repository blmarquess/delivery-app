const { Users } = require('../../database/models');

const ShowUserService = async ({ id }) => {
  const user = await Users.findByPk(id);

  if (!user) {
    return { error: 'User not found' };
  }

  return user;
};

module.exports = ShowUserService;
