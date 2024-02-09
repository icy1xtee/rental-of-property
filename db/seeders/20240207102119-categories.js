/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          name: 'Квартиры',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Комнаты',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Дома',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
