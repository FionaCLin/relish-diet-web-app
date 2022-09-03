import {setIngredientsSvc} from '../index.js';
import {Member, Ingredient, Recipe} from '../../../database-initi';
import {members, recipeInput, recipes} from './fixture';
import {ingredients} from '../../ingredients/__test__/fixture';
import {clearDB} from '../../../utils';

describe('#getSvc', () => {
  let newIngredients;
  beforeAll(async () => {
    await Member.create(members[0]);
    await Recipe.create(recipes[0]);
    await Ingredient.bulkCreate(ingredients);
  });

  afterAll(async () => {
    await clearDB();
  });

  test("save recipe's new ingredients", async () => {
    const recipeIngredients = [
      {
        //sugar
        recipeId: recipes[0].id,
        ingredientId: '2151d321-7fb2-4733-bbb1-e5ea503f2e82',
        amount: 10,
        createdBy: 'TESTER',
        updatedBy: 'TESTER',
      },
      {
        //Apple
        recipeId: recipes[0].id,
        ingredientId: '6d7c97ae-2a8a-463d-b2a1-d90e0e9db969',
        amount: 1000,
        createdBy: 'TESTER',
        updatedBy: 'TESTER',
      },
    ];
    newIngredients = await setIngredientsSvc({recipeId: recipes[0].id, recipeIngredients});
    recipeIngredients.forEach((recipeIngredient, index) => {
      expect(newIngredients[index]).toEqual(
        expect.objectContaining({
          ...recipeIngredient,
        }),
      );
    });
  });

  test("remove all recipe's old ingredients and save a new one", async () => {
    const recipeIngredients = [
      {
        // add flour,
        recipeId: recipes[0].id,
        ingredientId: '83c8396c-3d65-4dae-885a-f17bb958374c',
        amount: 10,
        createdBy: 'TESTER',
        updatedBy: 'TESTER',
      },
    ];
    newIngredients = await setIngredientsSvc({recipeId: recipes[0].id, recipeIngredients});
    expect(newIngredients).toEqual([
      expect.objectContaining({
        deletedAt: null,
        recipeId: recipes[0].id,
        ingredientId: '83c8396c-3d65-4dae-885a-f17bb958374c',
        amount: 10,
        createdBy: 'TESTER',
        updatedBy: 'TESTER',
      }),
    ]);
  });

  test("update recipe's existing ingredient amount and add new ingredients", async () => {
    const recipeIngredients = [
      {
        // add flour,
        id: newIngredients[0].id,
        recipeId: recipes[0].id,
        ingredientId: '83c8396c-3d65-4dae-885a-f17bb958374c',
        amount: 20,
        createdBy: 'TESTER',
        updatedBy: 'TESTER',
      },
      {
        //update apple amount
        recipeId: recipes[0].id,
        ingredientId: '6d7c97ae-2a8a-463d-b2a1-d90e0e9db969',
        amount: 500,
        createdBy: 'TESTER',
        updatedBy: 'TESTER',
      },
    ];

    newIngredients = await setIngredientsSvc({recipeId: recipes[0].id, recipeIngredients});

    expect(newIngredients).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          deletedAt: null,
          recipeId: recipes[0].id,
          ingredientId: '83c8396c-3d65-4dae-885a-f17bb958374c',
          amount: 20,
          createdBy: 'TESTER',
          updatedBy: 'TESTER',
        }),
        expect.objectContaining({
          deletedAt: null,
          recipeId: recipes[0].id,
          ingredientId: '6d7c97ae-2a8a-463d-b2a1-d90e0e9db969',
          amount: 500,
          createdBy: 'TESTER',
          updatedBy: 'TESTER',
        }),
      ]),
    );
  });
});
