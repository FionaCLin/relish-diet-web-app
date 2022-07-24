import {Recipe} from '../../database-initi.js';

export default async function get({memberId}) {
  return Recipe.findAndCountAll({
    where: {memberId}
  })
}
