module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('SalesProduct', {
    sale_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,    
  }, { timestamps: false });

  SalesProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      through: SalesProduct,
      foreignKey: 'product_id',
    });

    models.Product.belongsToMany(models.Sale, {
      through: SalesProduct,
      foreignKey: 'sale_id',
    });
  }
  return SalesProduct;
};
// dasfnj
