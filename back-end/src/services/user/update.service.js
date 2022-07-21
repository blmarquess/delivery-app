const { createHash } = require('crypto');
const { Users } = require('../../database/models');

const UpdateUserService = async ({ id, name, email, password, role }) => {
  const user = await Users.findByPk(id);

  if (!user) return { error: 'User not found' };

  const emailExists = await Users.findOne({ where: { email } });

  if (emailExists && emailExists.id !== +id) {
    return { error: 'There is already one user with this email' };
  }

  const encryptedPassword = createHash('md5').update(password).digest('hex');

  const updatedUser = await Users.update(
    {
      name,
      email,
      password: encryptedPassword,
      role,
    },
    { where: { email } },
  );

  return updatedUser;
};

module.exports = UpdateUserService;
