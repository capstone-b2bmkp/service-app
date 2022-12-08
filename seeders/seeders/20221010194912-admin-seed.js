'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Admin Quouter',
        rut: '1111111-1',
        email: 'capstone-b2bmkp@pinflag.cl',
        phoneNumber: '+56900000000',
        position: 'Administrador',
        image: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=600',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date()},
        {
          name: 'Admin Quoter Dev',
          rut: '11111111-0',
          email: 'adminquoter@pinflag.cl',
          phoneNumber: '+56911111111',
          position: 'Administrador',
          image: 'https://thumbs.dreamstime.com/b/el-grunge-texturizó-sello-del-admin-133645421.jpg',
          isAdmin: true,
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
