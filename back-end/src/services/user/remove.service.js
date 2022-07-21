const { Users } = require('../../database/models');

const RemoveUserService = async ({ id }) => {
  const user = await Users.findByPk(id);

  if (!user) {
    return { error: 'User not found' };
  }

  await Users.destroy({ where: { id } });

  return true;
};

module.exports = RemoveUserService;
