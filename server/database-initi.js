import {Sequelize} from 'sequelize';
import {dbconfig} from './config/config.js';
import MemberModel from '../database/models/member.js';
import UOMModel from '../database/models/uom.js';
import RecipeModel from '../database/models/recipe.js';
import IngredientModel from '../database/models/ingredient.js'

const environment = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(
  dbconfig[environment].database,
  dbconfig[environment].username,
  dbconfig[environment].password,
  {
    host: dbconfig[environment].host,
    dialect: dbconfig[environment].dialect,
  },
);

const Member = MemberModel(sequelize, Sequelize.DataTypes);
const Recipe = RecipeModel(sequelize, Sequelize.DataTypes);
const UOM = UOMModel(sequelize, Sequelize.DataTypes);
const Ingredient = IngredientModel(sequelize, Sequelize.DataTypes);

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

export {Member, Recipe, UOM};
