'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_feedbacks = sequelize.define('user_feedbacks', {
    userId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    name:DataTypes.STRING,
    gender:DataTypes.STRING,
    age:DataTypes.INTEGER,
    ratingType:DataTypes.STRING
  }, {});
  user_feedbacks.associate = function(models) {
    // associations can be defined here
  };
  return user_feedbacks;
};