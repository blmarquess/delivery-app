const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.STRING,
    require: false,
    defaultValue: 'customer'
  },
};

module.exports = (sequelize) => {
  const Users = sequelize.define("Users", Attributes, { tableName: 'users', timestamp: false });

  return Users;
};
