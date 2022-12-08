'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Sizes', [
      {
        name: 'XS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'S',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'M',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'L',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'XL',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
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
