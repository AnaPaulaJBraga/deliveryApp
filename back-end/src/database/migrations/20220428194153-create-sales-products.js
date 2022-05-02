module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SalesProducts', {
      sale_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Sales', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Products', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('SalesProducts');
  }
};
