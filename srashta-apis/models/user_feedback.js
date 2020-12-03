'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_feedbacks = sequelize.define('user_feedbacks', {
    userId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    name:DataTypes.STRING,
    gender:DataTypes.STRING,
    age:DataTypes.INTEGER,
    ratingType:DataTypes.STRING,
    // id:{
    //   allowNull: false,
    //   primaryKey: true,
    //   type: DataTypes.INTEGER,
    //   defaultValue: DataTypes.UUIDV4
    // }
  }, {});
  user_feedbacks.associate = function(models) { 
    user_feedbacks.hasMany(models.user_feedback_detailes, {
      foreignKey: 'feedbackId',
      onDelete: 'CASCADE'
    });
  };
  return user_feedbacks;
};