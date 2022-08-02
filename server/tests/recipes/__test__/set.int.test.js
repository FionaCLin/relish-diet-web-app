import * as request from 'supertest';
import {setServer} from '../../../server.js';

import {Member, Ingredient} from '../../../database-initi';
import {members} from './fixture';
import {ingredients} from '../../ingredients/fixture';
import {clearDB} from '../../../utils';

describe('#set', () => {
  let app;
  beforeAll(async () => {
    await Member.create(members[0]);
    await Ingredient.bulkCreate(ingredients);
    app = setServer();
  });

  afterAll(async () => {
    app.close();
    await clearDB();
  });

  test('Should return 400 if recipe has invalid field', async () => {
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

    const {body} = await request
      .agent(app)
      .post('/v1/recipes')
      .set('Accept', 'application/json')
      .send(recipeInput)
      .expect(400);

    expect(body).toEqual({
      message: 'request.body.images should be array',
      errors: [
        {
          path: '.body.images',
          message: 'should be array',
          errorCode: 'type.openapi.validation',
        },
      ],
    });
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
      images: [{title: 'Popeye toast with eggs', url: 'recipe.jpg'}],
      ingredients: [],
      calories: 1025,
      fats: 15,
      protein: 24,
      cabs: 32,
      sodium: 2,
    };

    const {body: recipe} = await request
      .agent(app)
      .post('/v1/recipes')
      .set('Accept', 'application/json')
      .send(recipeInput)
      .expect(200);

    expect(recipe).toEqual(
      expect.objectContaining({
        ...recipeInput,
        rate: 0,
        ingredients: [],
      }),
    );
  });
});
