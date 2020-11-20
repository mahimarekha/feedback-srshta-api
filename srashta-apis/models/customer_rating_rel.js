'use strict';
module.exports = (sequelize, DataTypes) => {
  const customerratingrel = sequelize.define('customerratingrel', {
    ratingType: DataTypes.STRING,
    customerId: DataTypes.STRING,
  }, {});
  customerratingrel.associate = function(models) {
    // associations can be defined here
  };
  return customerratingrel;
};