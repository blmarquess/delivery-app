const { createHash } = require('crypto');
const User = require('../../database/models/User');

const UpdateUserService = async ({ id, name, email, password, role }) => {
  const user = await User.findByPk(id);

  if (!user) {
    return { error: 'User not found' };
  }

  const emailExists = await User.findOne({ where: { email } });

  if (emailExists && emailExists.id !== id) {
    return { error: 'There is already one user with this email' };
  }

  const encryptedPassword = createHash('md5').update(password).digest('hex');

  const updatedUser = await User.update({
    name,
    email,
    password: encryptedPassword,
    role,
  });

  return updatedUser;
};

module.exports = UpdateUserService;
