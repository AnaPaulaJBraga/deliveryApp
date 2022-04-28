module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('SalesProduct', {
    saleId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,    
  }, { timestamp: false, underscored: true });

  SalesProduct.associate = (models) => {
    SalesProduct.belongsToMany(models.Product, {
      as: 'products',
      through: 'SalesProduct',
      foreignKey: 'productId',
      otherKey: 'id'
    });

    SalesProduct.belongsToMany(models.Sale, {
      as: 'sales',
      through: 'SalesProduct',
      foreignKey: 'saleId',
      otherKey: 'id',
    });
  }
  return SalesProduct;
};