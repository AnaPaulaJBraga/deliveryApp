module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('SalesProduct', {
    saleId: {
      type: DataTypes.INTEGER,
      field: 'sale_id',
    },
    productId: {
      type: DataTypes.INTEGER,
      field: 'product_id'
    },
    quantity: DataTypes.INTEGER,    
  }, { timestamps: false, tableName: 'salesProducts' });

  SalesProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      through: SalesProduct,
      foreignKey: 'saleId',
    });

    models.Product.belongsToMany(models.Sale, {
      through: SalesProduct,
      foreignKey: 'productId',
    });
  }
  
  return SalesProduct;
};
