import {saveSvc} from '../../lib/recipes/index.js';

export default async function saveRecipe(request, response, next) {
  try {
    const recipeIngredients = request.body;

    const {memberId} = recipeIngredients;

    const recipe = await saveSvc({
      ...recipeIngredients,
      createdBy: memberId,
      updatedBy: memberId,
    });
    
    response.json(recipe);
  } catch (error) {
    next(error.message);
  }
}
