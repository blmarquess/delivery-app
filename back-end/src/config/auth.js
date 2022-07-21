const { sign, verify } = require('jsonwebtoken');
const fs = require('fs');

const SECRET = fs.readFileSync('jwt.evaluation.key', 'utf-8');

module.exports = {
  sign: ({ id, role }) => {
    const token = sign(
      {
        id,
        role,
      },
      SECRET,
      {
        algorithm: 'HS256',
        expiresIn: '1d',
      },
    );

    return token;
  },

  verify: (token) => {
    try {
      const validade = verify(token, SECRET);

      return validade;
    } catch (error) {
      return null;
    }
  },
};