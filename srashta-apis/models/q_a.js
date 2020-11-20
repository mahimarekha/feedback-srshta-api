'use strict';
module.exports = (sequelize, DataTypes) => {
  const qa = sequelize.define('qa', {
    ratingTypeId: DataTypes.STRING,
    queryName: DataTypes.STRING,
    queryOptions:DataTypes.STRING,
    userId:DataTypes.INTEGER,
    categoryId:DataTypes.INTEGER
  }, {});
  qa.associate = function(models) {
    // associations can be defined here
  };
  return qa;
};