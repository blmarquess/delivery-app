const { randomUUID, createHash } = require('crypto');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        id: randomUUID(),
        name: 'Jonatas Passos',
        email: 'jonatas@gmail.com',
        password: createHash('md5').update('jonatas').digest('hex'),
        role: 'admin',
      },
      {
        id: randomUUID(),
        name: 'Luis Gustavo',
        email: 'gustavo@gmail.com',
        password: createHash('md5').update('gustavo').digest('hex'),
        role: 'seller',
      },
      {
        id: randomUUID(),
        name: 'Gabriel Augusto',
        email: 'gabriel@gmail.com',
        password: createHash('md5').update('gabriel').digest('hex'),
        role: 'customer',
      },
    ], { timestamp: false });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
