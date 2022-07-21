'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      seller_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      total_price: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2),
      },
      delivery_address: {
        allowNull: false,
        type: Sequelize.STRING
      },
      delivery_number: {
        allowNull: false,
        type: Sequelize.STRING
      },
      sale_date: {
        type: Sequelize.DATE,
        require: false,
        defaultValue: new Date()
      },
      status: {
        type: Sequelize.STRING,
        require: false,
        defaultValue: 'Pendente'
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sales');
  }
};
