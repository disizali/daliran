'use strict';
module.exports = (sequelize, DataTypes) => {
  const Setting = sequelize.define('Setting', {
    name: DataTypes.STRING,
    body: DataTypes.TEXT
  }, {});
  Setting.associate = function(models) {
    // associations can be defined here
  };
  return Setting;
};