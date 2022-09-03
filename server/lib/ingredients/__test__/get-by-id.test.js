import {getByIdSvc} from '../index.js';
import {Ingredient} from '../../../database-initi';
import {ingredients} from './fixture';
import {clearDB} from '../../../utils';

describe('#getByIdSvc', () => {
  let ingredient;
  beforeAll(async () => {
    ingredient = await Ingredient.create(ingredients[0]);
  });
  afterAll(async () => {
    await clearDB();
  });

  test('getById', async () => {
    const ingredientInDB = await getByIdSvc({id: ingredient.id});
    expect(ingredientInDB).toEqual(expect.objectContaining(ingredient.toJSON()));
  });
});
