'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', [
      {userId: 1, name: 'producto1', currentPrice: 1000, currentAvailable: 10, imageUrl: 'string', createdAt: new Date(), updatedAt: new Date()},
      {userId: 1, name: 'producto2', currentPrice: 1000, currentAvailable: 10, imageUrl: 'string', createdAt: new Date(), updatedAt: new Date()},
      {userId: 2, name: 'producto3', currentPrice: 1000, currentAvailable: 10, imageUrl: 'string', createdAt: new Date(), updatedAt: new Date()},
      {userId: 2, name: 'producto4', currentPrice: 1000, currentAvailable: 10, imageUrl: 'string', createdAt: new Date(), updatedAt: new Date()},
      {userId: 3, name: 'producto5', currentPrice: 1000, currentAvailable: 10, imageUrl: 'string', createdAt: new Date(), updatedAt: new Date()},
      {userId: 3, name: 'producto6', currentPrice: 1000, currentAvailable: 10, imageUrl: 'string', createdAt: new Date(), updatedAt: new Date()},
      {userId: 3, name: 'producto7', currentPrice: 1000, currentAvailable: 10, imageUrl: 'string', createdAt: new Date(), updatedAt: new Date()},
      {userId: 3, name: 'producto8', currentPrice: 1000, currentAvailable: 10, imageUrl: 'string', createdAt: new Date(), updatedAt: new Date()},
      {userId: 3, name: 'producto9', currentPrice: 1000, currentAvailable: 10, imageUrl: 'string', createdAt: new Date(), updatedAt: new Date()},
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
