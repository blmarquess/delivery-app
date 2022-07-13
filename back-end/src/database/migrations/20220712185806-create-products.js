'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        type: Sequelize.UUID
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2)
      },
      url_image: {
        allowNull: false,
        type: Sequelize.STRING
      },
    }, { timestamp: false });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};
