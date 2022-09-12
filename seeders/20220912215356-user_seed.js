'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
      name: 'matias',
      password: '1234',
      email: 'matias@uc.cl',
      phoneNumber: '123456789',
      deliveryAddress: 'calle falsa 123',
      image: 'string',
      discount: 'string',
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date()},
      
      {
        name: 'matias2',
        password: '1234',
        email: 'matias@uc.cl',
        phoneNumber: '123456789',
        deliveryAddress: 'calle falsa 123',
        image: 'string',
        discount: 'string',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date()},

        {
          name: 'matias3',
          password: '1234',
          email: 'matias@uc.cl',
          phoneNumber: '123456789',
          deliveryAddress: 'calle falsa 123',
          image: 'string',
          discount: 'string',
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date()},

          {
            name: 'matias4',
            password: '1234',
            email: 'matias@uc.cl',
            phoneNumber: '123456789',
            deliveryAddress: 'calle falsa 123',
            image: 'string',
            discount: 'string',
            isAdmin: false,
            createdAt: new Date(),
          updatedAt: new Date()}
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
