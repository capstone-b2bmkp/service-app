'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Categories', [
      {name: 'Root category', createdAt: new Date(), updatedAt: new Date()},
      {name: 'Electrónica', parentId: 1, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Tablets', parentId: 2, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Celulares', parentId: 2, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Tablet Marca1', parentId: 3, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Tablet Marca2', parentId: 3, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Vestuario', parentId: 1, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Sombreros', parentId: 7, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Zapatos', parentId: 7, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Iluminación', parentId: 1, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Deporte', parentId: 1, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Hogar', parentId: 1, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Oficina', parentId: 1, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Seguridad', parentId: 1, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Limpieza', parentId: 1, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Belleza', parentId: 1, createdAt: new Date(), updatedAt: new Date()},
      {name: 'Otros', parentId: 1, createdAt: new Date(), updatedAt: new Date()}
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
