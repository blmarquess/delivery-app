const { createHash } = require('crypto');
const User = require('../../database/models/User');

const CreateUserService = async ({ name, email, password, role }) => {
  const userExists = await User.findOne({ where: { email } });

  if (userExists) {
    return { error: 'User already exists' };
  }

  const encryptedPassword = createHash('md5').update(password).digest('hex');

  const createdUser = await User.create({
    name,
    email,
    password: encryptedPassword,
    role,
  });

  return createdUser;
};

module.exports = CreateUserService;
