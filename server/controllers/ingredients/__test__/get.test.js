import {get} from '../index.js';
import {Ingredient} from '../../../database-initi';
import {ingredients} from './fixture';
import {clearDB} from '../../../utils';

describe('#get', () => {
  let next;
  beforeAll(async () => {
    await Ingredient.bulkCreate(ingredients);
  });

  beforeEach(() => {
    next = jest.fn();
  });

  afterAll(async () => {
    await clearDB();
  });

  test('get by keyword', async () => {
    const keyword = 'apple';

    const request = {query: {keyword}};
    const response = {json: jest.fn()};
    const jsonSpy = jest.spyOn(response, 'json');
    await get(request, response, next);
    expect(jsonSpy).toBeCalledWith({
      count: 7,
      rows: expect.arrayContaining(
        ingredients
      .filter((i) => i.name.includes(keyword))
      .map((r) => expect.objectContaining(r)),
      ),
    });
  });
});
