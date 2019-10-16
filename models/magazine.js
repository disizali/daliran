'use strict';
module.exports = (sequelize, DataTypes) => {
  const Magazine = sequelize.define('Magazine', {
    faName: DataTypes.STRING,
    enName: DataTypes.STRING,
    body: DataTypes.TEXT,
    image: DataTypes.STRING,
    covers: DataTypes.TEXT
  }, {});
  Magazine.associate = function(models) {
    // associations can be defined here
  };
  return Magazine;
};