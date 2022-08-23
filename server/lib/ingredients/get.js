import {Ingredient} from '../../database-initi.js';
import {Op} from 'sequelize';

export default async function get({keyword, offset = 0, limit = 10}) {
  return Ingredient.findAndCountAll({
    offset,
    limit,
    where: {
      ...(keyword ? {name: {[Op.iLike]: `%${keyword}%`}} : {}),
    },
  });
}
