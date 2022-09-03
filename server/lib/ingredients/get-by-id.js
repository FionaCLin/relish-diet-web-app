import {Ingredient} from '../../database-initi.js';

export default async function getById({id}) {
  return Ingredient.findByPk(id);
}
