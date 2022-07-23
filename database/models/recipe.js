"use strict";

module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define("Recipe",
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
        type: DataTypes.JSON,
        defaultValue: [],
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
      tableName: "recipes",
    }
  );
  return Recipe;
};
