const { Sale, SalesProduct, Product, sequelize } = require('../database/models');

const getById = async (id) => {
  const response = await Sale.findAll({
    where: { sellerId: id },
  });

  return response;
};

const create = async (saleData) => {
    const response = await sequelize.transaction(async (t) => {
      const { id } = await Sale.create(saleData, { transaction: t });
  
      await Promise.all(
          saleData.cart.map(async ({ id: productId, itemQty }) => {
            await SalesProduct.create(
              { saleId: id, productId, quantity: itemQty }, { transaction: t },
            );
          }),
        );
      
      return id;
    });

    return response;
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
