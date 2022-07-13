const md5 = require('md5');
const { sign } = require('jsonwebtoken');
const { Users } = require('../../database/models');

const LoginService = async ({ email, password }) => {
  const user = await Users.findOne({ where: { email: email } });

  if (!user) {
    return { message: 'User not found' };
  }

  const passwordConfirmed = md5(password);

  if (passwordConfirmed !== user.password) {
    return { message: 'User Unauthorized' };
  }

  const token = sign(
    {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    process.env.APP_SECRET || '123',
    {
      algorithm: 'HS256',
      expiresIn: '1d',
    }
  );

  return token;
};

module.exports = LoginService;
