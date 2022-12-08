'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('ProductVariations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      SKU: {
        allowNull: true,
        type: Sequelize.STRING
      },
      SKUquoter: {
        allowNull: true,
        type: Sequelize.STRING
      },
      currentAvailable: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      currentPrice: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      discountPercentage: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      offerPrice: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      colorId: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      sizeId: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      materialId: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      genderId: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('ProductVariations');
  }
};
