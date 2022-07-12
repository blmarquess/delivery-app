const { createHash } = require('crypto');
const { sign } = require('jsonwebtoken');
const User = require('../../database/models/User');

const LoginService = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });

  if (!user) {
    return { error: 'User not found' };
  }

  const passwordConfirmed = createHash('md5').update(password).digest('hex');

  if (passwordConfirmed !== user.password) {
    return { error: 'User Unauthorized' };
  }

  const token = sign(
    {},
    process.env.APP_SECRET,
    {
      subject: user.id,
      expiresIn: '1d',
    },
  );

  return token;
};

module.exports = LoginService;
