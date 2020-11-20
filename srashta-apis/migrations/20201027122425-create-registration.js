'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('registrations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      businessName: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      buildingName: {
        type: Sequelize.STRING
      },
      areaLocalaity: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      pinNo: {
        type: Sequelize.INTEGER
      },
      entityType: {
        type: Sequelize.STRING
      },
      primaryName: {
        type: Sequelize.STRING
      },
      primaryMobile: {
        type: Sequelize.STRING
      },
      primaryEmail: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      primaryDesignation: {
        type: Sequelize.STRING
      },
      secondaryName: {
        type: Sequelize.STRING
      },
      secondaryMobile: {
        type: Sequelize.STRING
      },
      secondaryEmail: {
        type: Sequelize.STRING
      },
      secondaryDesignation: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('registrations');
  }
};