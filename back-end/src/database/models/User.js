const { DataTypes } = require('sequelize');

const Attributes = {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  role: DataTypes.STRING,
};

module.exports = (sequelize) => {
  const Users = sequelize.define("Users", Attributes, { tableName: 'users', timestamps: false });

  return Users;
};
