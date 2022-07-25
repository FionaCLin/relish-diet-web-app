import * as request from 'supertest';
import {setServer} from '../../../server'
import {Member, Recipe} from '../../../database-initi';
import {recipes, members} from './fixture';
import {clearDB} from '../../../utils';

describe('#get', () => {
  let app;
  let recipe;
  beforeAll(async () => {
    await Member.create(members[0]);
    recipe = await Recipe.create(recipes[0]);
  });

  beforeEach(() => {
    app = setServer();
  });

  afterAll(async () => {
    app.close()
    await clearDB();
  });

  test('getByMemberId', async () => {
    const {body: recipeRes} = await request
      .agent(app)
      .get(`/v1/recipes/${recipe.id}`)
      .set('Accept', 'application/json')
      .expect(200);

    expect(recipeRes).toEqual(expect.objectContaining(recipes[0]));
  });
});
