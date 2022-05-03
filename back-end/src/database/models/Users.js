module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING(255),
    email: DataTypes.STRING(255),
    password: DataTypes.STRING(255),
    role: DataTypes.STRING(255),
  },{ timestamps: false });

  User.associate = (models) => {
    User.hasMany(models.Sale, { foreignKey: 'id', as: 'sales' })
  }
  // a
  return User;
};