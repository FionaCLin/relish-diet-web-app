import {Recipe, Ingredient, RecipeIngredient} from '../../database-initi.js';

export default async function save(recipe) {
  const r = await Recipe.create(recipe);
  const result = r.toJSON();
  if (!recipe?.ingredients?.length) {
    return {...result, ingredients: []};
  }
  const recipeIngredients = recipe.ingredients.map((i) => ({
    ...i,
    recipeId: r.id,
    createdBy: r.memberId,
    updatedBy: r.memberId,
  }));

  const newIngredients = await RecipeIngredient.bulkCreate(recipeIngredients);

  const ingredients = recipeIngredients.map(({name, UOM, ingredientId}) => {
    const newIngredient = newIngredients.find((i) => i.ingredientId === ingredientId);
    return {...newIngredient.toJSON(), name, UOM};
  });

  return {...result, ingredients};
}
