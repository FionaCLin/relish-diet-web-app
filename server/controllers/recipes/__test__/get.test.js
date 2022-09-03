import {get} from '../index.js';
import {Recipe, Member} from '../../../database-initi';
import {recipes, members} from './fixture';
import {clearDB} from '../../../utils';

describe('#get', () => {
  let next;
  beforeAll(async () => {
    await Member.bulkCreate(members);
    await Recipe.bulkCreate(recipes);
  });

  beforeEach(() => {
    next = jest.fn();
  });

  afterAll(async () => {
    await clearDB();
  });

  test('get by MemberId', async () => {
    const request = {query: {memberId: members[0].id}};
    const response = {json: jest.fn()};
    const jsonSpy = jest.spyOn(response, 'json');
    await get(request, response, next);
    expect(jsonSpy).toBeCalledWith({
      count: 6,
      rows: expect.arrayContaining(
        recipes.filter((r) => r.memberId === members[0].id).map((r) => expect.objectContaining(r)),
      ),
    });
  });
});
