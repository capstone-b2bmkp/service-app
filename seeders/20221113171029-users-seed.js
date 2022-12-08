'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Users', [
      {
        name: 'María Ayala',
        companyId: 2,
        rut: '19649206-2',
        email: 'maria.ayala@nike.cl',
        phoneNumber: '+56982626054',
        position: 'Key Account Manager',
        image: 'https://quoter-images-dev.s3.sa-east-1.amazonaws.com/maria-ayala.webp',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Catalina Gárate',
        companyId: 1,
        rut: '24462154-6',
        email: 'catalina.garate@ccu.cl',
        phoneNumber: '+56914612702',
        position: 'Directora Ejecutiva',
        image: 'https://quoter-images-dev.s3.sa-east-1.amazonaws.com/catalina-garate.jpeg',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Christopher Campos',
        companyId: 2,
        rut: '21862066-3',
        email: 'christofer.campos@nike.cl',
        phoneNumber: '+56919348573',
        position: 'Ejecutivo Comercial',
        image: 'https://quoter-images-dev.s3.sa-east-1.amazonaws.com/usuario.jpeg',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Humberto Pérez',
        companyId: 3,
        rut: '20417774-0',
        email: 'humberto.perez@falabella.cl',
        phoneNumber: '+56918262675',
        position: 'Director Ejecutivo',
        image: 'https://quoter-images-dev.s3.sa-east-1.amazonaws.com/usuario.jpeg',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Stefano Smith',
        companyId: 5,
        rut: '19679897-8',
        email: 'stefano.smith@samsung.cl',
        phoneNumber: '+56910000007',
        position: 'Product Manager',
        image: 'https://quoter-images-dev.s3.sa-east-1.amazonaws.com/usuario.jpeg',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Inés Contreras',
        companyId: 6,
        rut: '12869859-0',
        email: 'ines.contreras@lapolar.cl',
        phoneNumber: '+56910000008',
        position: 'Key Account Manager',
        image: 'https://quoter-images-dev.s3.sa-east-1.amazonaws.com/usuario.jpeg',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sofía Marchant',
        companyId: 6,
        rut: '10691629-2',
        email: 'sofia.marchant@lapolar.cl',
        phoneNumber: '+56913645789',
        position: 'Product Manager',
        image: 'https://quoter-images-dev.s3.sa-east-1.amazonaws.com/usuario.jpeg',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Radhinka Stevens',
        companyId: 7,
        rut: '19687457-7',
        email: 'radhinka.stevens@jbl.cl',
        phoneNumber: '+56915437810',
        position: 'Directora Comercial',
        image: 'https://quoter-images-dev.s3.sa-east-1.amazonaws.com/usuario.jpeg',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Javiera Pinto',
        companyId: 8,
        rut: '19688483-1',
        email: 'javiera.pinto@mademsa.cl',
        phoneNumber: '+56918835411',
        position: 'Directora Ejecutiva',
        image: 'https://quoter-images-dev.s3.sa-east-1.amazonaws.com/usuario.jpeg',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {  
        name: 'Francisco González',
        companyId: 9,
        rut: '19839297-9',
        email: 'francisco.gonzalez@ursus.cl',
        phoneNumber: '+56916342012',
        position: 'Director de Operaciones',
        image: 'https://quoter-images-dev.s3.sa-east-1.amazonaws.com/usuario.jpeg',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {  
        name: 'Sebastian Riquelme',
        companyId: 10,
        rut: '19.686.528-4',
        email: 'sebastian.riquelme@3m.cl',
        phoneNumber: '+56918719913',
        position: 'Director Ejecutivo',
        image: 'https://quoter-images-dev.s3.sa-east-1.amazonaws.com/usuario.jpeg',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Alexander Marchant',
        companyId: 4,
        rut: '9146867-0',
        email: 'alexander.marchant@unilever.cl',
        phoneNumber: '+56916690726',
        position: 'Gerente de ventas',
        image: 'https://quoter-images-dev.s3.sa-east-1.amazonaws.com/usuario.jpeg',
        isAdmin: false,
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