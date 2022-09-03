import {delByIdSvc} from '../index.js';
import {Ingredient} from '../../../database-initi';
import {ingredients} from './fixture';
import {clearDB} from '../../../utils';

describe('#delByIdSvc', () => {
  let ingredient;
  beforeAll(async () => {
    ingredient = await Ingredient.create(ingredients[0]);
  });

  afterAll(async () => {
    await clearDB();
  });

  test('delete by Id', async () => {
    const id = ingredient.id;
    const res = await delByIdSvc({id});
    expect(res).toEqual(1);
    const ingredientsInDB = await Ingredient.findByPk(id);
    expect(ingredientsInDB).toEqual(null)
  });
});
