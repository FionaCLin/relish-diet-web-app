import {Recipe} from '../../database-initi.js';

export default async function save(recipe) {
  return Recipe.create(recipe)
}
