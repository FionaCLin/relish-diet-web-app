import {saveSvc} from '../index.js';
import {Member, Ingredient} from '../../../database-initi';
import {members, recipeInput} from './fixture';
import {ingredients} from '../../ingredients/__test__/fixture';
import {clearDB} from '../../../utils';

describe('#getSvc', () => {
  beforeAll(async () => {
    await Member.create(members[0]);
    await Ingredient.bulkCreate(ingredients);
  });

  afterAll(async () => {
    await clearDB();
  });

  test('save recipe without ingredients', async () => {
    const recipe = await saveSvc(recipeInput);
    expect(recipe).toEqual(
      expect.objectContaining({
        ...recipeInput,
        rate: 0,
      }),
    );
  });

  test('save recipe with ingredients', async () => {
    const ingredients = [
      {
        ingredientId: '6d7c97ae-2a8a-463d-b2a1-d90e0e9db969',
        amount: 1000,
        UOM: 'gram',
        name: 'apple',
        createdBy: 'TESTER',
        updatedBy: 'TESTER',
      },
      {
        ingredientId: '2151d321-7fb2-4733-bbb1-e5ea503f2e82',
        amount: 10,
        UOM: 'gram',
        name: 'sugar',
        createdBy: 'TESTER',
        updatedBy: 'TESTER',
      },
    ];

    const recipeWithIngredients = {
      ...recipeInput,
      ingredients,
    };

    const recipe = await saveSvc(recipeWithIngredients);
    expect(recipe).toEqual(
      expect.objectContaining({
        ...recipeInput,
      }),
    );
    expect(recipe.ingredients).toHaveLength(2);
    console.log(recipe.ingredients[0].toJSON());
    ingredients.forEach(({name, amount, UOM, ingredientId}, index) => {
      expect(recipe.ingredients[index]).toEqual(
        expect.objectContaining({
          name,
          UOM,
          RecipeIngredient: expect.objectContaining({
            ingredientId,
            recipeId: recipe.id,
            amount,
          }),
        }),
      );
    });
    // expect(recipe.ingredients).toEqual(
    //   expect.arrayContaining([
    //     {
    //       RecipeIngredient: {
    //         amount: 1000,
    //         createdAt: expect.any(Date),
    //         createdBy: 'TESTER',
    //         deletedAt: null,
    //         id: expect.any(String),
    //         ingredientId: '6d7c97ae-2a8a-463d-b2a1-d90e0e9db969',
    //         recipeId: '7f763e64-459a-414c-a8b6-b13aaec8c7d8',
    //         updatedAt: expect.any(Date),
    //         updatedBy: 'TESTER',
    //       },
    //       UOM: 'gram',
    //       createdAt: expect.any(Date),
    //       createdBy: 'SEEDED',
    //       deletedAt: null,
    //       id: expect.any(String),
    //       name: 'apple',
    //       nutritionMeta: {cabs: 0, calories: 0, fats: 0, protein: 0, sodium: 0, type: 'Uncategorised'},
    //       updatedAt: expect.any(Date),
    //       updatedBy: 'SEEDED',
    //     },
    //     {
    //       RecipeIngredient: {
    //         amount: 10,
    //         createdAt: expect.any(Date),
    //         createdBy: 'TESTER',
    //         deletedAt: null,
    //         id: expect.any(String),
    //         ingredientId: '2151d321-7fb2-4733-bbb1-e5ea503f2e82',
    //         recipeId: '7f763e64-459a-414c-a8b6-b13aaec8c7d8',
    //         updatedAt: expect.any(Date),
    //         updatedBy: 'TESTER',
    //       },
    //       UOM: 'gram',
    //       createdAt: expect.any(Date),
    //       createdBy: 'SEEDED',
    //       deletedAt: null,
    //       id: expect.any(String),
    //       name: 'sugar',
    //       nutritionMeta: {cabs: 0, calories: 0, fats: 0, protein: 0, sodium: 0, type: 'Uncategorised'},
    //       updatedAt: expect.any(Date),
    //       updatedBy: 'SEEDED',
    //     },
    //   ]),
    //   // expect.arrayContaining(recipeWithIngredients.ingredients.map((i) => expect.objectContaining(i))),
    // );
    // expect(recipe).toEqual(
    //   expect.objectContaining({
    //     ...recipeInput,
    //     rate: 0,
    //     ingredients: expect.arrayContaining(recipeWithIngredients.ingredients.map((i) => expect.objectContaining(i))),
    //   }),
    // );
  });
});
