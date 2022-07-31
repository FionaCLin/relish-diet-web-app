import {saveSvc} from '../index.js';
import {clearDB} from '../../../utils';

describe('#setSvc', () => {
  afterAll(async () => {
    await clearDB();
  });

  test('save', async () => {
    const ingredientInput = {
      name: 'banana',
      UOM: 'ml',
      nutritionMeta: {calories: 1025, fats: 15, protein: 24, cabs: 32, sodium: 2},
      createdBy: 'TESTER',
      updatedBy: 'TESTER',
    };
    const ingredient = await saveSvc(ingredientInput);
    expect(ingredient).toEqual(
      expect.objectContaining({
        ...ingredientInput,
      }),
    );
  });
});
