import {getSvc} from '../index.js';
import {Recipe, Member} from '../../../database-initi';
import {recipes, members} from './fixture';
import {clearDB} from '../../../utils';

describe('#getSvc', () => {
  beforeAll(async () => {
    await Promise.all(members.map((member) => Member.create(member)));
    await Promise.all(recipes.map((recipe) => Recipe.create(recipe)));
  });

  afterAll(async () => {
    await clearDB()
  });

  test('getByMemberId', async () => {
    const {count, rows} = await getSvc({memberId: members[0].id});
    expect(count).toEqual(6);
    recipes
      .filter((r) => r.memberId === members[0].id)
      .forEach((recipe) => {
        const returnRecipe = rows.find((r) => r.title === recipe.title);
        expect(returnRecipe).toEqual(expect.objectContaining(recipe));
      });
  });
});
