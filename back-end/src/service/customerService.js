const { Sale, Product } = require('../database/models');

const getByCustomerId = async (id) => {
  const response = await Sale.findAll({
    where: { userId: id },
    include: [{
      model: Product,
      as: 'orders',
      attributes: ['id', 'name', 'price'],
      through: { attributes: ['quantity'], as: 'salesProduct' },
    }],
  });
  return response;
};

module.exports = {
  getByCustomerId,
};