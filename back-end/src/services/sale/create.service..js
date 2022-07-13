const { createHash } = require('crypto');
const User = require('../../database/models/User');

const CreateSaleService = async ({
  user_id,
  seller_id,
  total_price,
  delivery_address,
  delivery_number,
  status,
}) => {
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

module.exports = CreateSaleService;
