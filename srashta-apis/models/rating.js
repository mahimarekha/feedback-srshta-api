'use strict';
module.exports = (sequelize, DataTypes) => {
  const rating = sequelize.define('rating', {
    ratingType: DataTypes.STRING,
  }, {});
  rating.associate = function(models) {
    // associations can be defined here
  };
  return rating;
};