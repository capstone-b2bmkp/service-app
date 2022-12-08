'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Roleusers', [
      {
        userId: 2,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 7,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 7,
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 8,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 8,
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 9,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 9,
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 10,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 10,
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 11,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 11,
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 12,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 12,
        roleId: 2,
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
