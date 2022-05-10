const { Sale } = require('../database/models');

const getByCustomerId = async (id) => {
  const response = await Sale.findAll({
    where: { userId: id },
  });

  return response;
};

module.exports = {
  getByCustomerId,
};