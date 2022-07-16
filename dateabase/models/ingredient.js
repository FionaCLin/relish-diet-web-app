'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define("Ingredient",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: sequelize.UUIDV4,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      UOM: {
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
      type: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'Uncategorised',
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
      timestamps: true,
      tableName: "ingredients",
    }
  );
  return Ingredient;
};