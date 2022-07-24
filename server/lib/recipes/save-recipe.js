import {Recipe} from '../../database-initi.js';

export default async function saveRecipe(recipe) {
  return Recipe.create(recipe)
}
