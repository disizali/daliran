'use strict';
module.exports = (sequelize, DataTypes) => {
  const Data = sequelize.define('Data', {
    name: DataTypes.STRING,
    body: DataTypes.TEXT
  }, {});
  Data.associate = function(models) {
    // associations can be defined here
  };
  return Data;
};