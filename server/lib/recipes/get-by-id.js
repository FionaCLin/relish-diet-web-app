import {Recipe, Member, Ingredient} from '../../database-initi.js';

export default async function getById({id}) {
  return Recipe.findOne({
    where: {id},
    include: [
      {model: Member, attributes: ['firstName', 'lastName'], as: 'author'},
      {model: Ingredient, as: 'ingredients'},
    ],
  });
}
