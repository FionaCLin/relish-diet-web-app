import {getUOM} from '../index.js';
import {UOM} from '../../../database-initi';
import {UOMs} from './fixture';
import {clearDB} from '../../../utils';

describe('#getUOMSvc', () => {
  let next;
  beforeAll(async () => {
    await UOM.bulkCreate(UOMs);
  });

  beforeEach(() => {
    next = jest.fn();
  });

  afterAll(async () => {
    await clearDB();
  });

  test('getUOM', async () => {
    const request = {};
    const response = {json: jest.fn()};
    const jsonSpy = jest.spyOn(response, 'json');

    await getUOM(request, response, next);
    expect(jsonSpy).toBeCalledWith(expect.arrayContaining(UOM_Data.map((i) => expect.objectContaining(i))));
  });
});
