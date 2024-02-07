/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          name: 'apartments',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'rooms',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'houses',
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
