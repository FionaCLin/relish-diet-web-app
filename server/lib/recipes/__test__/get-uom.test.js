import {getUOMSvc} from '../index.js';
import {UOM} from '../../../database-initi';
import {UOMs} from './fixture';
import {clearDB} from '../../../utils';

describe('#getUOMSvc', () => {
  beforeAll(async () => {
    await UOM.bulkCreate(UOMs);
  });

  afterAll(async () => {
    await clearDB();
  });

  test('getUOM', async () => {
    const uoms = await getUOMSvc();
    uoms.forEach((uom, index) => {
      expect(uom.toJSON()).toEqual({
        ...UOMs[index],
        id: expect.any(Number),
      });
    });
  });
});
