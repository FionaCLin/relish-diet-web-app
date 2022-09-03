import {getByIdSvc, saveSvc} from '../index.js';
import {Recipe, Member, Ingredient} from '../../../database-initi';
import {recipes, members, recipeInput} from './fixture';
import {ingredients} from '../../ingredients/__test__/fixture';
import {clearDB} from '../../../utils';

describe('#getSvc', () => {
  let recipe;
  beforeAll(async () => {
    await Member.create(members[0]);
    recipe = await Recipe.create(recipes[0]);
    await Ingredient.bulkCreate(ingredients);
  });

  afterAll(async () => {
    await clearDB();
  });

  test('getById without ingredients', async () => {
    const recipeInDB = await getByIdSvc({id: recipe.id});
    console.log(recipeInDB.toJSON());
    expect(recipeInDB).toEqual(
      expect.objectContaining({
        ...recipe.toJSON(),
        author: expect.objectContaining({
          firstName: members[0].firstName,
          lastName: members[0].lastName,
        }),
      }),
    );
  });

  test('getById with ingredients', async () => {
    const ingredients = [
      {
        ingredientId: '2151d321-7fb2-4733-bbb1-e5ea503f2e82',
        amount: 10,
        UOM: 'gram',
        name: 'sugar',
      },
      {
        ingredientId: '6d7c97ae-2a8a-463d-b2a1-d90e0e9db969',
        amount: 1000,
        UOM: 'gram',
        name: 'apple',
      },
    ];

    const recipeWithIngredients = {
      ...recipeInput,
      ingredients,
    };

    const recipe = await saveSvc(recipeWithIngredients);
    const recipeInDB = await getByIdSvc({id: recipe.id});
    console.log(recipeInDB.toJSON());
    expect(recipeInDB).toEqual(
      expect.objectContaining({
        ...recipe,
        author: expect.objectContaining({
          firstName: members[0].firstName,
          lastName: members[0].lastName,
        }),
        ingredients: expect.any(Array)
      }),
    );
  });
});
