/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Animals', [
      {
        name: 'Cat',
        description: 'Cute cat',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Dog',
        description: 'Playful Dog',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Monkey',
        description: 'Simple monkey',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Humster',
        description: 'Fast humster',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Snake',
        description: 'Angry snake',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Animals', null, {});
  },
};
