'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Quoterpurchases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      deliveryId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Deliveries',
          key: 'id'
        }
      },
      cost: {
        type: Sequelize.INTEGER
      },
      orderId: {
        type: Sequelize.STRING
      },
      sessionId: {
        type: Sequelize.STRING
      },
      transbankToken: {
        type: Sequelize.STRING
      },
      transbankUrl: {
        type: Sequelize.STRING
      },
      transbankAuthorizationCode: {
        type: Sequelize.STRING
      },
      transbankTransactionDate: {
        type: Sequelize.STRING
      },
      transbankTypePayment: {
        type: Sequelize.STRING
      },
      transbankInstallmentsNumber: {
        type: Sequelize.INTEGER
      },
      transbankCardNumber: {
        type: Sequelize.STRING
      },
      paymentStatus: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Quoterpurchases');
  }
};