import { Sequelize } from 'sequelize';
import { dbconfig } from './config/config.js';
import MemberModel from '../dateabase/models/member.js';
import RecipeModel from '../dateabase/models/recipes.js';

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(dbconfig[env].database, dbconfig[env].username, dbconfig[env].password, {
  host: dbconfig[env].host,
  dialect: dbconfig[env].dialect,
});

const Member = MemberModel(sequelize, Sequelize.DataTypes);
const Recipe = RecipeModel(sequelize, Sequelize.DataTypes);

Recipe.belongsTo(Member,  { targetKey: 'id', foreignKey: 'memberId' })
Member.hasMany(Recipe, {as: 'creator', foreignKey: 'memberId'});

export {
  Member,
  Recipe
}