const md5 = require('md5');
const { sign } = require('jsonwebtoken');
const User = require('../../database/models/User');

const LoginService = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });

  if (!user) {
    return { message: 'User not found' };
  }

  const passwordConfirmed = md5(password);

  if (passwordConfirmed !== user.password) {
    return { message: 'User Unauthorized' };
  }

  const token = sign(
    {},
    process.env.APP_SECRET,
    {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      expiresIn: '1d',
    },
  );

  return token;
};

module.exports = LoginService;
