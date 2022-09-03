import { Recipe } from '../../database-initi.js';
import {Op} from 'sequelize';

export default async function get({ memberId, keyword }) {
  const where = {};
  if (memberId) {
    where['memberId'] = memberId;
  } else if (keyword) {
    where['title'] = { [Op.iLike]: `%${keyword}%` };
  }

  return Recipe.findAndCountAll({
    where
  })
}