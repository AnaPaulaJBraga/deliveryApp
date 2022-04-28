module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    totalPrice: DataTypes.DECIMAL(9,2),
    deliveryAddress: DataTypes.STRING(100),
    deliveryNumber: DataTypes.STRING(50),
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING(50),
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,

  }, { timestamp: false, underscored: true });
  Sale.associate = (models) => {
    Sale.belongsTo(models.User, { foreignKey: 'userId', as: 'users' });
    Sale.belongsTo(models.User, { foreignKey: 'sellerId', as: 'users' });
    Sale.hasMany(models.SalesProduct, { foreignKey: 'id', as: 'salesproducts' })
  }

  return Sale;
};