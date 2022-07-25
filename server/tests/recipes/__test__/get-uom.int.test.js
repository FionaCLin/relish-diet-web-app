import * as request from 'supertest';
import {setServer} from '../../../server.js';
import {UOM} from '../../../database-initi';
import {UOMs} from './fixture';
import {clearDB} from '../../../utils';

describe('#getUOMSvc', () => {
  let app;
  beforeAll(async () => {
    await UOM.bulkCreate(UOMs);
  });

  beforeEach(() => {
    app = setServer();
  });

  afterAll(async () => {
    app.close()
    await clearDB();
  });

  test('getUOM', async () => {
    const {body: uomsRes} = await request
      .agent(app)
      .get(`/v1/recipes/ingredients/uom`)
      .set('Accept', 'application/json')
      .expect(200);

    expect(uomsRes).toHaveLength(UOMs.length);
    expect(uomsRes).toEqual(
      UOMs.map((u) => ({
        ...u,
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        id: expect.any(Number),
      })),
    );
  });
});
