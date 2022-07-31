'use strict';


module.exports = (sequelize, DataTypes) => {
  const RecipeIngredient = sequelize.define("RecipeIngredient",
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: sequelize.UUIDV4,
      },
      recipeId: {
        allowNull: false,
        type: DataTypes.UUID,
        references: {
          model: "recipes",
          key: "id",
        },
      },
      ingredientId: {
        allowNull: false,
        type: DataTypes.UUID,
        references: {
          model: "ingredients",
          key: "id",
        },
      },
      amount: {
        allowNull: false,
        type: DataTypes.FLOAT,
        defaultValue: 0,
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
      tableName: "recipe_ingredients",
    }
  );
  return RecipeIngredient;
};
