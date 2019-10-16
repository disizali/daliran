'use strict';
module.exports = (sequelize, DataTypes) => {
  const Page = sequelize.define('Page', {
    name: DataTypes.STRING,
    body: DataTypes.TEXT
  }, {});
  Page.associate = function(models) {
    // associations can be defined here
  };
  return Page;
};