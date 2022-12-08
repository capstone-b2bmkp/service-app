'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Colors', [
      {
        name: 'Verde',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Rojo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Azul',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Negro',
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
