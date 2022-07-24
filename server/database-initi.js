import {models, sequelize, Sequelize}from '../database/models/index.js';

const {Recipe, Member, UOM} = models 
// Recipe.belongsTo(Ingredient, {
//   through: "RecipeIngredients",
//   as: "ingredients",
//   foreignKey: "recipeId",
// })

Recipe.belongsTo(Member, {
  targetKey: 'id',
  foreignKey: 'memberId',
});

Member.hasMany(Recipe, {
  as: 'creator',
  foreignKey: 'memberId',
});

export {Member, Recipe, UOM, sequelize};
