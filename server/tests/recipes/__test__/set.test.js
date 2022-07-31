import {Member} from '../../../database-initi';
import {members} from './fixture';
import {clearDB} from '../../../utils';

describe('#set', () => {
  let next;
  beforeAll(async () => {
    await Member.create(members[0]);
  });

  beforeEach(() => {
    next = jest.fn();
  });

  afterAll(async () => {
    await clearDB();
  });

  test('Should save a recipe without any ingredients', async () => {
    const recipeInput = {
      // 'images/recipe.jpg', 'images/recipe2.png', 'images/recipe3.jpg'
      method: `Preheat the grill to high.\
       Lay the tomato vines in a large baking tray, prick each tomato with the tip of a sharp knife\
       and grill for 4 minutes, then add the bread to the tray to toast on both sides.\
       Meanwhile, crack 1 egg into a blender, add the ham, spinach, a good pinch of black pepper and the milk and blitz until smooth.\
       Take the tray from under the grill and divide the green eggy mixture between\
       the four pieces of toast, spreading it right out to the edges.\
       Dry fry the remaining 2 eggs in a non-stick frying pan on a medium heat, covering the pan with\
       a lid to steam and coddle the eggs on the top – cook to your liking.`,
      title: 'Popeye toast with eggs',
      memberId: members[0].id,
      images: JSON.stringify([{title: 'Popeye toast with eggs', url: 'recipe.jpg'}]),
      ingredients: [],
      calories: 1025,
      fats: 15,
      protein: 24,
      cabs: 32,
      sodium: 2,
    };

    await request
      .agent(app)
      .post('/v1/recipes')
      .set('Accept', 'application/json')
      .send(recipeInput)
      .expect(200);
    // const request = {body: recipeInput};
    // const response = {json: jest.fn()};
    // const jsonSpy = jest.spyOn(response, 'json');

    // const recipe = await save(request, response, next);
    // expect(jsonSpy).toBeCalledWith(
    //   expect.objectContaining({
    //     ...recipeInput,
    //     rate: 0,
    //   }),
    // );
    // expect(recipe).toEqual(
    //   expect.objectContaining({
    //     ...recipeInput,
    //     rate: 0,
    //   }),
    // );
  });
});
