const recipesList = [
  {id: '508f0f43-d804-401f-9548-2cdb8a0bb196', title: 'Caramel Apple', image: 'apple'},
  {id: 'e9fb994b-1c7f-4073-bc96-9bedc23d05c9', title: 'Popeye toast with eggs', image: 'recipe'},
  {id: 'df278f45-4432-4dcd-9ad0-0614db2874ec', title: 'Pistachio and figs cake', image: 'cake'},
  {id: 'ea0574b3-8d18-431e-9f97-212955ad5a3e', title: 'Tender salmon on bed of salad', image: 'chicken'},
  {id: 'aace1a64-8643-4822-8895-1d0543de860b', title: 'Meatball migoreng', image: 'meatball'},
  {id: 'e94c1e15-cd17-4c9f-bf5f-63a92aca4958', title: 'Tomato and basil pasta', image: 'paella'},
  {id: '4315c406-ab05-48f9-9415-2c2da87a2cbf', title: 'Sunfried tomato and olives pizza', image: 'pizza'},
  {id: '30e86577-4325-4a75-820a-35fac6c384f2', title: 'Berrilicious porridge', image: 'porridge'},
  {id: '6f78aead-7184-4e27-989c-c768548866c2', title: 'Fresh tomato and olives pizza', image: 'protein'},
  {id: 'bf5a46a0-38a7-4680-98b5-68feb9bf3e3a', title: 'Toasted stacked foccacia sandwich', image: 'sandwich'},
  {id: 'bf1bdbb4-4c9b-435b-ae02-351c0dabcea0', title: 'Banana pudding with caramel sauce', image: 'soup'},
];
export const UOMs = [
  {
    abbreviation: 'g',
    description: 'grams',
    createdBy: 'SEEDED',
    updatedBy: 'SEEDED',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    abbreviation: 'ml',
    description: 'millilitres',
    createdBy: 'SEEDED',
    updatedBy: 'SEEDED',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    abbreviation: 'tbsp',
    description: 'tablespoons',
    createdBy: 'SEEDED',
    updatedBy: 'SEEDED',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    abbreviation: 'tsp',
    description: 'teaspoons',
    createdBy: 'SEEDED',
    updatedBy: 'SEEDED',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
export const members = [
  {
    id: '31e8eed8-2fde-4b93-9dd7-6bff47b7e6ba',
    firstName: 'tester1',
    lastName: 'unit',
    email: 'tester1.unit@gmail.com',
    birthday: new Date(2000, 1, 1),
    createdBy: 'SEEDED',
    updatedBy: 'SEEDED',
  },
  {
    id: '31e8eed8-2fee-4b93-9dd7-6bff47b7e6ba',
    firstName: 'tester2',
    lastName: 'unit',
    email: 'tester2.unit@gmail.com',
    birthday: new Date(2000, 1, 1),
    createdBy: 'SEEDED',
    updatedBy: 'SEEDED',
  },
];
export const recipes = recipesList.map(({title, image}, index) => ({
  title,
  memberId: members[index % 2].id,
  method: '',
  images: JSON.stringify([{title, url: `${image}.jpg`}]),
  calories: 0,
  fats: 0,
  protein: 0,
  cabs: 0,
  sodium: 0,
  createdBy: 'TESTER',
  updatedBy: 'TESTER',
}));

export const recipeInput = {
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
  calories: 1025,
  fats: 15,
  protein: 24,
  cabs: 32,
  sodium: 2,
};
