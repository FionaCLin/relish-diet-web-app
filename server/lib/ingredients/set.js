import {Ingredient} from '../../database-initi.js';

export default async function save(ingredient) {
  return Ingredient.create(ingredient)
}
