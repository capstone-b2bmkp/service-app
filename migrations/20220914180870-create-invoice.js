'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Invoices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      purchaseId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Purchases',
          key: 'id'
        }
      },
      holding: {
        type: Sequelize.STRING
      },
      rut: {
        type: Sequelize.STRING
      },
      mail: {
        type: Sequelize.STRING
      },
      topic: {
        type: Sequelize.STRING
      },
      direction: {
        type: Sequelize.STRING
      },
      region: {
        type: Sequelize.STRING
      },
      district: {
        type: Sequelize.STRING
      },
      file: {
        type: Sequelize.TEXT
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Invoices');
  }
};