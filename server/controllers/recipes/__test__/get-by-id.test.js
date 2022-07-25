import {getById} from '../index.js';
import {Recipe, Member} from '../../../database-initi';
import {recipes, members} from './fixture';
import {clearDB} from '../../../utils';

describe('#get', () => {
  let recipe;
  let next = jest.fn();
  beforeAll(async () => {
    await Member.create(members[0]);
    recipe = await Recipe.create(recipes[0]);
  });

  beforeEach(() => {
    next = jest.fn();
  });

  afterAll(async () => {
    await clearDB();
  });

  test('getByMemberId', async () => {
    const request = {params: {recipeId: recipe.id}};
    const response = {json: jest.fn()};
    const jsonSpy = jest.spyOn(response, 'json');
    const recipeInDB = await getById(request, response, next);
    expect(jsonSpy).toBeCalledWith(expect.objectContaining(recipe.toJSON()));
  });
});
