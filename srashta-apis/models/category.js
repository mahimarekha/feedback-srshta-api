'use strict';
module.exports = (sequelize, DataTypes) => {
  const categorytype = sequelize.define('categorytype', {
    userId:DataTypes.INTEGER,
    categoryName: DataTypes.STRING,
    description:DataTypes.STRING,
  }, {});
  categorytype.associate = function(models) {
    // associations can be defined here
  };
  return categorytype;
};