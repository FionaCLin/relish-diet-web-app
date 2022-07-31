import * as request from 'supertest';
import {setServer} from '../../../server.js';
import {Recipes, Members} from '../../../database-initi';
import {recipes, members} from './fixture';
import {clearDB} from '../../../utils';

describe('#get', () => {
  let app;
  beforeAll(async () => {
    await Members.bulkCreate(members)
    await Recipes.bulkCreate(recipes)
  });

  beforeEach(() => {
    app = setServer();
  });

  afterAll(async () => {
    app.close()
    await clearDB();
  });

  test('get by MemberId', async () => {
    const {
      body: {count, rows},
    } = await request
      .agent(app)
      .get(`/v1/recipes?memberId=${members[0].id}`)
      .set('Accept', 'application/json')
      .expect(200);

    expect(rows).toHaveLength(6);
    expect(rows).toEqual(
      recipes
        .filter((r) => r.memberId === members[0].id)
        .map((r) => ({
          ...r,
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
          id: expect.any(String),
          rate: 0,
        })),
    );
  });
});
