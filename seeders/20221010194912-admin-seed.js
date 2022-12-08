'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Users', [
      {
        name: 'Admin Quouter',
        rut: '1111111-1',
        email: 'capstone-b2bmkp@pinflag.cl',
        phoneNumber: '+56900000000',
        position: 'Administrador',
        image: 'https://www.pngitem.com/pimgs/m/128-1280822_check-mark-box-clip-art-blue-admin-icon.png',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Admin Quouter Capstone',
        rut: '1111111-1',
        email: 'admin-capstone@quoter.cl',
        phoneNumber: '+56900000000',
        position: 'Administrador',
        image: 'https://www.pngitem.com/pimgs/m/128-1280822_check-mark-box-clip-art-blue-admin-icon.png',
        isAdmin: true,
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