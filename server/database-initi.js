import {models, sequelize, Sequelize} from '../database/models/index.js';

const {Member, Recipe, UOM, Ingredient, RecipeIngredient} = models;
// sourceKey: 'name', targetKey:
Recipe.belongsToMany(Ingredient, {
  through: RecipeIngredient,
  as: 'ingredients',
  foreignKey: 'recipeId',
});

Ingredient.belongsToMany(Recipe, {
  through: RecipeIngredient,
  as: 'recipes',
  foreignKey: 'ingredientId',
});

Recipe.belongsTo(Member, {
  targetKey: 'id',
  foreignKey: 'memberId',
});

Member.hasMany(Recipe, {
  as: 'creator',
  foreignKey: 'memberId',
});

export {Member, Recipe, UOM, Ingredient, RecipeIngredient, sequelize, Sequelize};
