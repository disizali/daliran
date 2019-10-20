'use strict';
module.exports = (sequelize, DataTypes) => {
  const Slide = sequelize.define('Slide', {
    title: DataTypes.TEXT,
    description: DataTypes.TEXT,
    image: DataTypes.TEXT,
    link: DataTypes.TEXT
  }, {});
  Slide.associate = function(models) {
    // associations can be defined here
  };
  return Slide;
};