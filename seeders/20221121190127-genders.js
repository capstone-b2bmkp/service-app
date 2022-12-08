'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Genders', [
      {
        name: 'Unisex',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Masculino',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Femenino',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Niño',
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
