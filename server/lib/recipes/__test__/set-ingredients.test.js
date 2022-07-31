import {setIngredientsSvc} from '../index.js';
import {Member, Ingredient, Recipe} from '../../../database-initi';
import {members, recipeInput, recipes} from './fixture';
import {ingredients} from '../../ingredients/__test__/fixture';
import {clearDB} from '../../../utils';

describe('#getSvc', () => {
  beforeAll(async () => {
    await Member.create(members[0]);
    await Recipe.create(recipes[0]);
    await Ingredient.bulkCreate(ingredients);
  });

  afterAll(async () => {
    await clearDB();
  });

  test("save recipe's ingredients", async () => {
    const recipeIngredients = [
      {
        recipeId: recipes[0].id,
        ingredientId: '6d7c97ae-2a8a-463d-b2a1-d90e0e9db969',
        amount: 1000,
        UOM: 'g',
        name: 'apple',
        createdBy: 'TESTER',
        updatedBy: 'TESTER',
      },
      {
        recipeId: recipes[0].id,
        ingredientId: '2151d321-7fb2-4733-bbb1-e5ea503f2e82',
        amount: 10,
        UOM: 'g',
        name: 'sugar',
        createdBy: 'TESTER',
        updatedBy: 'TESTER',
      },
    ];
    const ingredients = await setIngredientsSvc(recipeIngredients);
    console.log(ingredients);
    expect(ingredients[0]).toEqual(
      expect.objectContaining({
        RecipeIngredient: recipeIngredients[0]
        //   ...recipeInput,
      //   rate: 0,
      }),
    );
  });
});
