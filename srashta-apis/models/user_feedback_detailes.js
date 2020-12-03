'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_feedback_detailes = sequelize.define('user_feedback_detailes', {
    feedbackId: DataTypes.INTEGER,
    query: DataTypes.STRING,
    userAnswer:DataTypes.STRING,
    
  }, {});
  user_feedback_detailes.associate = function(models) {
    user_feedback_detailes.belongsTo(models.user_feedbacks, {
      foreignKey: 'feedbackId',
      onDelete: 'CASCADE'
    });
    // associations can be defined here
  };
  return user_feedback_detailes;
};