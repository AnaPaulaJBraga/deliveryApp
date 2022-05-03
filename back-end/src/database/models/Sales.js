module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    total_price: DataTypes.DECIMAL(9,2),
    delivery_address: DataTypes.STRING(100),
    delivery_number: DataTypes.STRING(50),
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING(50),
    user_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
  }, { timestamps: false });
  
  Sale.associate = (models) => {
    Sale.belongsTo(models.User, { foreignKey: 'user_id', as: 'users'});
    Sale.belongsTo(models.User, { foreignKey: 'seller_id', as: 'sellers' });
  }

  return Sale;
};