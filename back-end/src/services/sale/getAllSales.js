const { Sales } = require('../../database/models');

const getAll = async () => Sales.findAll();

module.exports = { getAll };
