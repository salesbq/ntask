/** @type {import('sequelize-cli').Migration} */

const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        username: 'salesbq@gmail.com',
        password: await bcryptjs.hash('$ales13inc', 10),
        is_super_user: true,
        status: true,
        add_for_user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
