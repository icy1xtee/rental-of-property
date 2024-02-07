const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    static associate(models) {
      // define association here
    }
  }
  Animal.init({
    name: {
      allowNull: false,
      unique: true,
      type: DataTypes.TEXT,
    },
    description: {
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
    modelName: 'Animal',
  });
  return Animal;
};
