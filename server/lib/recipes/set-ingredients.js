import {RecipeIngredient} from '../../database-initi.js';
import {Op} from 'sequelize';

export default async function save({recipeId, recipeIngredients}) {
  const ingredients = await RecipeIngredient.findAll({where: {recipeId}, attributes: ['id']});
  
  const ingredientsToUpdate = recipeIngredients.filter((i) => i?.id);
  const ingredientsToCreate = recipeIngredients.filter((i) => !i?.id);
  const idToKeep = ingredientsToUpdate.map(({id}) => id);
  const ingredientsToDelete = ingredients.filter(({id}) => !idToKeep.includes(id)).map(({id}) => id);
  
  try {
    if (ingredientsToDelete?.length) {
      await RecipeIngredient.destroy({where: {id: {[Op.in]: ingredientsToDelete}}});
    }
    if (ingredientsToCreate?.length) {
      await RecipeIngredient.bulkCreate(ingredientsToCreate);
    }
    if (ingredientsToUpdate?.length) {
      await RecipeIngredient.bulkCreate(ingredientsToUpdate, {
        updateOnDuplicate: ['amount'],
        returning: true,
        conflictFields: ['recipeId', 'ingredientId'],
      });
    }
    return RecipeIngredient.findAll({where: {recipeId}});
    // await RecipeIngredient.bulkUpdate(ingredientsToUpdate);
  } catch (err) {
    console.log(err);
  }
}
