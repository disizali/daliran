"use strict";
module.exports = (sequelize, DataTypes) => {
  const Navbar = sequelize.define(
    "Navbar",
    {
      title: DataTypes.STRING,
      parent: DataTypes.INTEGER,
      link: DataTypes.STRING,
      order: DataTypes.INTEGER
    },
    {
      tableName: "navbar"
    }
  );
  Navbar.associate = function(models) {
    // associations can be defined here
  };
  return Navbar;
};
