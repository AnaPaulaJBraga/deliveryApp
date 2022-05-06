const { Sale } = require('../database/models');

const getById = async (id) => {
  const response = await Sale.findAll({
    where: { sellerId: id },
  });

  return response;
};

module.exports = {
  getById,
};
