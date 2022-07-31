import {RecipeIngredient} from '../../database-initi.js';

export default async function save(recipeIngredients) {
  return RecipeIngredient.bulkCreate(recipeIngredients, {updateOnDuplicate:['amount']})
}
