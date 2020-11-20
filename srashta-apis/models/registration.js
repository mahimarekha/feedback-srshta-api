'use strict';
module.exports = (sequelize, DataTypes) => {
  const registration = sequelize.define('registration', {
    businessName: DataTypes.STRING,
    address: DataTypes.STRING,
    buildingName: DataTypes.STRING,
    areaLocalaity: DataTypes.STRING,
    city: DataTypes.STRING,
    pinNo: DataTypes.INTEGER,
    entityType: DataTypes.STRING,
    primaryName: DataTypes.STRING,
    primaryMobile: DataTypes.STRING,
    primaryEmail: DataTypes.STRING,
    password: DataTypes.STRING,
    primaryDesignation: DataTypes.STRING,
    secondaryName: DataTypes.STRING,
    secondaryMobile: DataTypes.STRING,
    secondaryEmail: DataTypes.STRING,
    secondaryDesignation: DataTypes.STRING
  }, {});
  registration.associate = function(models) {
    // associations can be defined here
  };
  return registration;
};