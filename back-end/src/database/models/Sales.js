module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    totalPrice: {
      type: DataTypes.DECIMAL(9,2),
      field: 'total_price',
    },
    deliveryAddress: {
      type: DataTypes.STRING(100),
      field: 'delivery_address',
    },
    deliveryNumber: {
      type: DataTypes.STRING(50),
      field: 'delivery_number',
    },
    saleDate: {
      type: DataTypes.DATE,
      field: 'sale_date',
    },
    status: DataTypes.STRING(50),
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id',
    },
    sellerId: {
      type: DataTypes.INTEGER,
      field: 'seller_id',
    },
  }, { timestamps: false });
  
  Sale.associate = (models) => {
    Sale.belongsTo(models.User, { foreignKey: 'user_id', as: 'users'});
    Sale.belongsTo(models.User, { foreignKey: 'seller_id', as: 'sellers' });
  }

  return Sale;
};
