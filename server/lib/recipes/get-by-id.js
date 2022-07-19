import {Recipe} from '../../database-initi.js';

export default async function getById({uuid}) {
  return Recipe.findOne({where: {uuid}});
}
