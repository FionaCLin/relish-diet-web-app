import {getSvc} from '../index.js';
import {Ingredient} from '../../../database-initi';
import {ingredients} from './fixture';
import {clearDB} from '../../../utils';

describe('#getSvc', () => {
  beforeAll(async () => {
    await Ingredient.bulkCreate(ingredients);
  });

  afterAll(async () => {
    await clearDB();
  });

  test('can search by keyword', async () => {
    const keyword = 'apple';
    const {count, rows} = await getSvc({keyword});
    expect(count).toEqual(7);
    expect(rows).toHaveLength(7);
    ingredients
      .filter((i) => i.name.includes(keyword))
      .forEach((i) => {
        const ri = rows.find((r) => r.name === i.name);
        expect(ri).toEqual(expect.objectContaining(i));
      });
  });

  test('can get with limit and offset', async () => {
    const keyword = 'apple';
    const offset = 2;
    const limit = 3;
    const {count, rows} = await getSvc({keyword, offset, limit});

    expect(count).toEqual(7);
    expect(rows).toHaveLength(3);

    ingredients
      .filter((i, index) => i.name.includes(keyword) && index >= offset && index < offset + limit)
      .forEach((i) => {
        const ri = rows.find((r) => r.name === i.name);
        expect(ri).toEqual(expect.objectContaining(i));
      });
  });
});
