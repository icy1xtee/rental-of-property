const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate({ Property, User }) {
      this.belongsTo(Property, { foreignKey: 'property_id' });
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Favorite.init(
    {
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'User',
          key: 'id',
        },
        onDelete: 'Cascade',
      },
      property_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Properties',
          key: 'id',
        },
        onDelete: 'Cascade',
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'Favorite',
    },
  );
  return Favorite;
};
