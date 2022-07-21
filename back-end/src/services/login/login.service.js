const md5 = require('md5');
const { Users } = require('../../database/models');
const jwt = require('../../config/auth');

const LoginService = async ({ email, password }) => {
  const user = await Users.findOne({ where: { email } });

  if (!user) {
    return { message: 'User not found' };
  }

  const passwordConfirmed = md5(password);

  if (passwordConfirmed !== user.password) {
    return { message: 'User Unauthorized' };
  }

  const token = jwt.sign({ id: user.id, role: user.role });

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    token,
    role: user.role,
  };
};

module.exports = LoginService;
