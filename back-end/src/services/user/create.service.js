const md5 = require('md5');
const User = require('../../database/models/User');
const jwt = require('../../config/auth');

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

  const token = jwt.sign({ id: createdUser.id, role: createdUser.role });

  return {
    name: createdUser.name,
    email: createdUser.email,
    token,
    role: createdUser.role,
  };
};

module.exports = CreateUserService;
