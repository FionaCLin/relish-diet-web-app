import {getByIdSvc} from '../index.js';
import {Recipe, Member} from '../../../database-initi';
import {recipes, members} from './fixture';
import {clearDB} from '../../../utils';

describe('#getSvc', () => {
  let recipe;
  beforeAll(async () => {
    await Member.create(members[0]);
    recipe = await Recipe.create(recipes[0]);
  });

  afterAll(async () => {
    await clearDB();
  });

  test('getByMemberId', async () => {
    const recipeInDB = await getByIdSvc({id: recipe.id});
    expect(recipeInDB).toEqual(expect.objectContaining(recipe.toJSON()));
  });
});
