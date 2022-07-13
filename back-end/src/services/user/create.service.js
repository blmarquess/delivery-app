const md5 = require('md5');
const User = require('../../database/models/User');

const CreateUserService = async ({ name, email, password }) => {
  const userExists = await User.findOne({ where: { email } });

  if (userExists) {
    return { message: 'User already exists' };
  }

  const encryptedPassword = md5(password);

  const createdUser = await User.create({
    name,
    email,
    password: encryptedPassword,
  });

  return { name: createdUser.name };
};

module.exports = CreateUserService;
