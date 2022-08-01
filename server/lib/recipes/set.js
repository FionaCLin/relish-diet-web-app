import {Recipe, Ingredient, RecipeIngredient} from '../../database-initi.js';

export default async function save(recipe) {
  return Recipe.create(recipe).then(async (r) => {
    if (!recipe?.ingredients?.length) return r;
    const recipeIngredients = recipe.ingredients.map((i) => ({
      ...i,
      recipeId: r.id,
    }));
    await RecipeIngredient.bulkCreate(recipeIngredients);
    return Recipe.findOne({
      where: {id: r.id},
      include: {
        model: Ingredient,
        attributes: ['name', 'UOM'],
        as: 'ingredients',
      },
    });
  });
}
