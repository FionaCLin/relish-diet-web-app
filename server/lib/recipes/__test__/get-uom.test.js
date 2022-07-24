import {getUOMSvc} from '../index.js';
import {UOM} from '../../../database-initi';
import {UOMs} from './fixture';
import {clearDB} from '../../../utils';

describe('#getUOMSvc', () => {
  let recipe;
  beforeAll(async () => {
    await UOM.bulkCreate(UOMs);
  });

  afterAll(async () => {
    await clearDB();
  });

  test('getUOM', async () => {
    const uoms = await getUOMSvc();
    uoms.forEach((uom, index) => {
      expect(uom).toEqual(expect.objectContaining(UOMs[index]));
    });
  });
});
