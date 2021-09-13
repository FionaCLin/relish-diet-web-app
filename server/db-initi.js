import { Sequelize } from 'sequelize';
import { dbconfig } from './config/config.js';
import MemberModel from '../dateabase/models/member.js';

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(dbconfig[env].database, dbconfig[env].username, dbconfig[env].password, {
  host: dbconfig[env].host,
  dialect: dbconfig[env].dialect,
});


export const Member = MemberModel(sequelize, Sequelize.DataTypes);
