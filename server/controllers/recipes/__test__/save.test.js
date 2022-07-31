import {save} from '../index.js';
import {Member, Ingredient} from '../../../database-initi';
import {members, recipeInput} from './fixture';
import {ingredients} from '../../ingredients/__test__/fixture';
import {clearDB} from '../../../utils';

describe('#save', () => {
  let next;
  beforeAll(async () => {
    await Member.create(members[0]);
    await Ingredient.bulkCreate(ingredients);
  });

  beforeEach(() => {
    next = jest.fn();
  });

  afterAll(async () => {
    await clearDB();
  });

  test('Save recipe without ingredients', async () => {
    const request = {body: recipeInput};
    const response = {json: jest.fn()};
    const jsonSpy = jest.spyOn(response, 'json');
    await save(request, response, next);
    expect(jsonSpy).toBeCalledWith(
      expect.objectContaining({
        ...recipeInput,
        rate: 0,
      }),
    );
  });

  test('Save recipe with ingredients', async () => {
    const recipeIngredients = {
      ...recipeInput,
      ingredients: [
        {
          id: '6d7c97ae-2a8a-463d-b2a1-d90e0e9db969',
          amount: 1000,
          UOM: 'g',
          name: 'apple',
        },
        {
          id: '2151d321-7fb2-4733-bbb1-e5ea503f2e82',
          amount: 10,
          UOM: 'g',
          name: 'sugar',
        },
      ],
    };
    const request = {body: recipeIngredients};
    const response = {json: jest.fn()};
    const jsonSpy = jest.spyOn(response, 'json');
    await save(request, response, next);
    expect(jsonSpy).toBeCalledWith(
      expect.objectContaining({
        ...recipeIngredients,
        rate: 0,
        ingredients: expect.arrayContaining(recipeWithIngredients.ingredients),
      }),
    );
  });
});
