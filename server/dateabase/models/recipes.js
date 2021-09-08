'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Recipes extends Model {}
  Recipes.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: sequelize.UUIDV4,
      },
      memberId: {
        allowNull: false,
        type: DataTypes.UUID,
        reference: {
          model: 
        }
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      method: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      calories: {
        allowNull: false,
        type: DataTypes.FLOAT,
        defaultValue: 0,
      },
      fats: {
        allowNull: false,
        type: DataTypes.FLOAT,
        defaultValue: 0,
      },
      protein: {
        allowNull: false,
        type: DataTypes.FLOAT,
        defaultValue: 0,
      },
      cabs: {
        allowNull: false,
        type: DataTypes.FLOAT,
        defaultValue: 0,
      },
      sodium: {
        allowNull: false,
        type: DataTypes.FLOAT,
        defaultValue: 0,
      },
      rate: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      images: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: '',
      },
      createdBy: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      updatedBy: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      deletedAt: {
        type: DataTypes.DATE,
        defaultValue: null,
      },
    },
    {
      sequelize,
      modelName: 'Recipe',
      timestamps: true,
      tableName: 'recipes',
    },
  );
  return Recipes;
};
