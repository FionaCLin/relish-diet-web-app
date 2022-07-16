'use strict';


module.exports = (sequelize, DataTypes) => {
  const RecipeIngredient = sequelize.define("RecipeIngredient",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: sequelize.UUIDV4,
      },
      recipeId: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      ingredientId: {
        allowNull: false,
        type: DataTypes.UUID,
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
      tableName: "RecipeIngredients",
    }
  );
  return RecipeIngredient;
};
