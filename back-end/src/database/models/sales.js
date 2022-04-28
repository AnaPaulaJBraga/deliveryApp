module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    total_price: DataTypes.DECIMAL(9,2),
    // SHOULD BE VARCHAR ^^^^
    delivery_address: DataTypes.STRING(100),
    delivery_number: DataTypes.STRING(50),
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING(50),
  }, { timestamp: false });
  Sale.associate = (models) => {
    Sale.belongsTo(models.User, { foreignKey: 'userId', as: 'users' });
    Sale.belongsTo(models.User, { foreignKey: 'sellerId', as: 'users' });
  }

  return Sale;
};