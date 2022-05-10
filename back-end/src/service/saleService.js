const { Sale, SalesProduct, Product } = require('../database/models');

const getById = async (id) => {
  const response = await Sale.findAll({
    where: { sellerId: id },
  });

  return response;
};

const create = async (saleData) => {
  const { sale, saleProduct } = saleData;
  const { id } = await Sale.create(sale);

  await Promise.all(
    saleProduct.map(async (saleInfo) => {
      await SalesProduct.create({ saleId: id, ...saleInfo });
    }),
  );

  return id;
};

const getSaleDetail = async (id) => {
  const response = await Sale.findOne({
    where: { id },
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
  getById,
  create,
  getSaleDetail,
};
