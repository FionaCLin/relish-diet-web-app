import {saveSvc} from '../../lib/recipes/index.js';

export default async function saveRecipe(request, response, next) {
  try {
    const recipeIngredients = request.body;

    const {ingredients = []} = recipeIngredients;

    const {memberId, title, images, calories, fats, protein, cabs, sodium, method} = recipeIngredients;

    const recipe = await saveSvc({
      title,
      memberId,
      images,
      calories,
      fats,
      protein,
      cabs,
      sodium,
      method,
      createdBy: memberId,
      updatedBy: memberId,
    });
    if (ingredients?.length) {
      console.log('add ingredients');
      const ingredientsToCreate = ingredients.map(({id, amount}) => ({
        ingredientId: id,
        amount,
        recipeId: recipe.id,
      }));
      // call service
    }
    response.json(result);
  } catch (error) {
    next(error.message);
  }
}
