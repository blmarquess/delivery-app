const md5 = require('md5');
const { Users } = require('../../database/models');
const jwt = require('../../config/auth');

const CreateUserService = async ({ name, email, password }) => {
  const userExists = await Users.findOne({ where: { email } });

  if (userExists) {
    return { message: 'User already exists' };
  }

  const encryptedPassword = md5(password);

  const createdUser = await Users.create({
    name,
    email,
    password: encryptedPassword,
  });
  const newUser = await Users.findOne({ where: { email } });

  const token = jwt.sign({ id: createdUser.id, role: createdUser.role });

  return {
    name: createdUser.name,
    email: createdUser.email,
    token,
    role: newUser.role,
  };
};

module.exports = CreateUserService;
