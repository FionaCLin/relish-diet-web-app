import {Recipe} from '../../database-initi.js';

export default async function getById({id}) {
  return Recipe.findByPk(id);
}
