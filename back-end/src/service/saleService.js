const { Sale, SalesProduct } = require('../database/models');

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
    saleProduct.map(async (sale) => {
      await SalesProduct.create(sale);
    })
  );

  return id;
}

module.exports = {
  getById,
  create,
};
