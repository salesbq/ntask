/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('groups', [
      {
        name: 'admin',
        status: true,
        add_for_user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'owner',
        status: true,
        add_for_user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('groups', null, {});
  },
};
