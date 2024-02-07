const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    static associate({ Category, Favorite, Img }) {
      this.belongsTo(Category, { foreignKey: 'category_id' });
      this.hasMany(Favorite, { foreignKey: 'property_id' });
      this.hasMany(Img, { foreignKey: 'property_id' });
    }
  }
  Property.init({
    title: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    address: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    price: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    category_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    coordinates: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Property',
  });
  return Property;
};
