'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Magazines', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      faName: {
        type: Sequelize.STRING
      },
      enName: {
        type: Sequelize.STRING
      },
      body: {
        type: Sequelize.TEXT
      },
      image: {
        type: Sequelize.STRING
      },
      covers: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Magazines');
  }
};