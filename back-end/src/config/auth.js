const { sign, verify } = require('jsonwebtoken');

module.exports = {
  sign: ({ id, role }) => {
    const token = sign(
      {
        id,
        role,
      },
      process.env.APP_SECRET,
      {
        algorithm: 'HS256',
        expiresIn: '1d',
      },
    );

    return token;
  },

  verify: (token) => {
    try {
      const validade = verify(token, process.env.APP_SECRET);

      return validade;
    } catch (error) {
      return null;
    }
  },
};
