import {saveRecipeSvc} from '../../lib/recipes/index.js';

export default async function saveRecipe(request, response, next) {
  try {
    const recipe = request.body;
    const result = await saveRecipeSvc(recipe);
    response.json(result);
  } catch (error) {
    next(error.message);
  }
}
