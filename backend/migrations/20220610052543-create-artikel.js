'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn('Artikels', 'isi_artikel', {
        type: Sequelize.TEXT,
        allowNull: false
      }),
    ]);
  },

  async down (queryInterface, Sequelize) {
  }
};
