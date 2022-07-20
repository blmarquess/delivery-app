const User = require('../../database/models/User');

const RemoveUserService = async ({ id }) => {
  const user = await User.findByPk(id);

  if (!user) {
    return { error: 'User not found' };
  }

  await User.delete(id);
};

module.exports = RemoveUserService;
