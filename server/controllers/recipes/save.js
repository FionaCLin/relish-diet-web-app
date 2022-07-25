import {saveSvc} from '../../lib/recipes/index.js';

export default async function saveRecipe(request, response, next) {
  try {
    const recipe = request.body;
    const result = await saveSvc(recipe);
    response.json(result);
  } catch (error) {
    next(error.message);
  }
}
