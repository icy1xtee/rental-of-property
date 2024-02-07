"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    static associate({ Property }) {
      this.hasMany(Property, { foreignKey: "category_id" });
    }
  }
  Categories.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Categories",
    }
  );
  return Categories;
};
