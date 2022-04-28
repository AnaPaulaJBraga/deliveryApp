module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING(100),
    price: DataTypes.DECIMAL(4,2),
    urlImage: DataTypes.STRING(200)
  }, { timestamp: false, underscored: true });

  Product.associate = (models) => {
    Product.hasMany(models.SalesProduct, { foreignKey: 'id', as: 'salesproducts' });
  }

  return Product;
};