import {Ingredient} from '../../database-initi.js';

export default async function delById({id}) {
  return Ingredient.destroy({where: {id}});
}
