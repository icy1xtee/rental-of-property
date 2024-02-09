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
      references: {
        model: 'Categories',
        key: 'id',
      },
      onDelete: 'Cascade',
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    coordinates: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Property',
  });
  return Property;
};
