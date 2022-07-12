const { DataTypes } = require('sequelize');

const Attributes = {
  id: DataTypes.PRIMARY,
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  role: DataTypes.STRING,
};

module.exports = (sequelize) => {
  const Users = sequelize.define("User", Attributes, { modelName: 'Users' });

  return Users;
};
