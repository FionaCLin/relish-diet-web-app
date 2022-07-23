import {Recipe} from '../../database-initi.js';

export default async function getByMemberId({memberId}) {
  return Recipe.findAndCountAll({
    where: {memberId}
  })
}
