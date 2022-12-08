'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      companyId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Companies',
          key: 'id'
        }
      },
      categoryId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Categories',
          key: 'id'
        }
      },
      name: {
        type: Sequelize.STRING
      },
      currentPrice: {
        type: Sequelize.INTEGER
      },
      discountPercentage: {
        type: Sequelize.INTEGER
      },
      offerPrice: {
        type: Sequelize.INTEGER
      },
      currentAvailable: {
        type: Sequelize.INTEGER
      },
      imageUrl: {
        type: Sequelize.STRING,
        defaultValue: '/'
      },
      isActive: {
        allowNull: false,
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Products');
  }
};
