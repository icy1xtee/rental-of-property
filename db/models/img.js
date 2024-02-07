"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Img extends Model {
    static associate({Property}) {
      this.belongsTo(Property, { foreignKey: "property_id" });
    }
  }
  Img.init(
    {
      url: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      property_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Property",
          key: "id",
        },
        onDelete: "Cascade",
      },
    },
    {
      sequelize,
      modelName: "Img",
    }
  );
  return Img;
};
