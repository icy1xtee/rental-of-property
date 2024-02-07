const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate({ Property }) {
      this.hasMany(Property, { foreignKey: 'category_id' });
    }
  }
  Category.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Categories',
    },
  );
  return Category;
};
