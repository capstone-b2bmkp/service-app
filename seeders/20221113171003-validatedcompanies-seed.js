'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Validatedcompanies', [
      {
        companyId: 1,
        isValidated: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        companyId: 2,
        isValidated: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        companyId: 3,
        isValidated: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        companyId: 4,
        isValidated: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        companyId: 5,
        isValidated: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        companyId: 6,
        isValidated: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        companyId: 7,
        isValidated: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        companyId: 8,
        isValidated: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        companyId: 9,
        isValidated: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        companyId: 10,
        isValidated: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
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
