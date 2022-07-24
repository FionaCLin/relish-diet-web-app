import {Recipe} from '../../database-initi.js';

export default async function getRecipes({memberId}) {
  return Recipe.findAndCountAll({
    where: {memberId}
  })
}
