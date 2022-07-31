import {Ingredient} from '../../../database-initi';
import {getById} from '../index.js';
import {ingredients} from './fixture';
import {clearDB} from '../../../utils';

describe('#get', () => {
  let ingredient;
  let next = jest.fn();
  beforeAll(async () => {
    ingredient = await Ingredient.create(ingredients[0]);
  });

  beforeEach(() => {
    next = jest.fn();
  });

  afterAll(async () => {
    await clearDB();
  });

  test('getById', async () => {
    const request = {params: {id: ingredient.id}};
    const response = {json: jest.fn()};
    const jsonSpy = jest.spyOn(response, 'json');
    await getById(request, response, next);
    expect(jsonSpy).toBeCalledWith(expect.objectContaining(ingredient.toJSON()));
  });
});
