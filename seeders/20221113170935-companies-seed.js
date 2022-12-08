'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Companies', [
      {
        name: 'CCU',
        email: 'administracion@ccu.cl',
        rut: '90413000-1',
        phoneNumber: '+56946835671',
        image: 'https://quoter-images-dev.s3.sa-east-1.amazonaws.com/CCU.png',
        topic: 'Comercio',
        categoryId: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nike Chile',
        email: 'administracion@nike.cl',
        rut: '96675670-5',
        phoneNumber: '+56958679032',
        image: 'https://quoter-images-dev.s3.sa-east-1.amazonaws.com/NIke.png',
        topic: 'Deporte',
        categoryId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Falabella',
        email: 'administracion@falabella.cl',
        rut: '90749000-9',
        phoneNumber: '+56956734903',
        image: 'https://quoter-images-dev.s3.sa-east-1.amazonaws.com/Falabella.png',
        topic: 'Retail',
        categoryId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Unilever',
        email: 'administracion@unilever.cl',
        rut: '92091000-9',
        phoneNumber: '+56975128854',
        image: 'https://quoter-images-dev.s3.sa-east-1.amazonaws.com/unilever.png',
        topic: 'Alimenticio',
        categoryId: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Samsung',
        email: 'administracion@samsung.cl',
        rut: '77879240-0',
        phoneNumber: '+56967423675',
        image: 'https://quoter-images-dev.s3.sa-east-1.amazonaws.com/samsung.png',
        topic: 'Electrónico',
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'La Polar',
        email: 'administracion@lapolar.cl',
        rut: '96874030-K',
        phoneNumber: '+56947586906',
        image: 'https://quoter-images-dev.s3.sa-east-1.amazonaws.com/lapolar.png',
        topic: 'Retail',
        categoryId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'JBL',
        email: 'administracion@jbl.cl',
        rut: '76223936-1',
        phoneNumber: '+56925365787',
        image: 'https://quoter-images-dev.s3.sa-east-1.amazonaws.com/jbl.png',
        topic: 'Audio',
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mademsa',
        email: 'administracion@mademsa.cl',
        rut: '76163495-K',
        phoneNumber: '+56928374658',
        image: 'https://quoter-images-dev.s3.sa-east-1.amazonaws.com/mademsa.png',
        topic: 'Electrodomésticos',
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ursus Trotter',
        email: 'administracion@ursus.cl',
        rut: '92065000-7',
        phoneNumber: '+56950608389',
        image: 'https://quoter-images-dev.s3.sa-east-1.amazonaws.com/ursustroter.jpeg',
        topic: 'Electrodomésticos',
        categoryId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '3M',
        email: 'administracion@3m.cl',
        rut: '93626000-4',
        phoneNumber: '+569922354710',
        image: 'https://quoter-images-dev.s3.sa-east-1.amazonaws.com/3m.png',
        topic: 'Industrial',
        categoryId: 14,
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
