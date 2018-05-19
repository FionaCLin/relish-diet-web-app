let users = [{ // 5 users
  email: 'synexenel-1416@yopmail.com',
  username: 'BeggarlySunflower36', 
  password: '123',
  nameGive: 'Bobbie',
  nameFamily: 'Richmond',
  birthday: '5 February 1979',
  goal: 'Lose weight'
}, {
  email: 'qubonnybac-4423@yopmail.com',
  username: 'FoodLymph',
  password: '123',
  nameGive: 'Willem',
  nameFamily: 'Reyes',
  birthday: '4 January 1974',
  goal: 'Gain muscle'
}, {
  email: 'uzocidez-6524@yopmail.com',
  username: 'PastaHostile',
  password: '123',
  nameGive: 'Daanyaal',
  nameFamily: 'Dolan',
  birthday: '17 June 1983',
  goal: 'Gain muscle'
}, {
  email: 'evettarra-6708@yopmail.com',
  username: 'CrabBaby',
  password: '123',
  nameGive: 'Joao ',
  nameFamily: 'Rodriguez',
  birthday: '25 November 1963',
  goal: 'Lose weight'
}, {
  email: 'appekasy-3468@yopmail.com',
  username: 'Lincolnhigh',
  password: '123',
  nameGive: 'Ela',
  nameFamily: 'Guerra',
  birthday: '25 November 1986',
  goal: 'Gain muscle'
}];

let ingredients = [{//per 100 grams of serving
  id: 001,
  name: 'Olive oil',
  UOM: 'g',
  cal: 884,
  pro: 0,
  cab: 0,
  fat: 100
}, {// 1 onion or 180 grams
  id: 002,
  name: 'red onions',
  UOM: 'g',
  cal: 66,
  pro: 2.2,
  cab: 14.2,
  fat: 0.4
}{// per 100 grams 
  id: 003,
  name: 'Garlic',
  UOM: 'g',
  cal: 149,
  pro: 6.36,
  cab: 33.06,
  fat: 0.5
}]

//recipe1
let recipes = [{ // 30 recipes
  name: 'Spicy Southwestern Vegetarian Burger', //weight loss, Yield: 1 burger, image link: https://skinnyms.com/wp-content/uploads/2014/04/Spicy-Southwestern-Vegetarian-Burger.jpg
  method: '
1.In a large skillet add 1 tablespoon oil, turn to medium-low heat and saut� onions until tender, about 4 minutes. Add garlic and saute one additional minute. Add kidney beans, green chili peppers and corn, continue to saut� until beans soften up, about 3 minutes. Add oregano, chili powder, cumin and cayenne pepper, stir to combine.
2.Combine in a large mixing bowl bean mixture, cheese and bread crumbs.
3.Mash all ingredients with a potato masher or fork until beans are well mashed. Allow to cool for 10 minutes.
4.Make 5 burger shaped patties. Note: Patties can be cooked right away or covered and refrigerated for up to 24 hours.
5.Add remaining tablespoon oil to a non-stick large skillet, turn to medium heat and cook until patties are browned on both sides and heated through, approximately 12 minutes total.
6.Serve patties on your favorite bun or roll. Try your favorite condiments',
  duration: 40,
  ingredients: [{
    id: 001,
    amount: 2 tablespoons,
    cal: 48,
    pro: 0,
    cab: 0,
    fat: 5.6
  }, {
    id: 002,
    amount: 1/2 cup diced red onions,
    cal: 7,
    pro: 0.15,
    cab: 1.62,
    fat: 0.01
  }{
    id: 003,
    amount: 1 clove garlic,
    cal: 4,
    pro: 0,
    cab: 1,
    fat: 0
  }{
    id: 004,
    amount: 1/4 can of kidney beans drained,
    cal: 350,
    pro: 1.5,
    cab: 65,
    fat: 0.9
  }{
    id: 005,
    amount: 1/4 can of diced green chili peppers,
    cal: 8,
    pro: 0.28,
    cab: 1.7,
    fat: 0.1
  }{
    id: 006,
    amount: 20g of fresh corn,
    cal: 17,
    pro: 0.64,
    cab: 3.8,
    fat: 0.24
  }{
    id: 007,
    amount: 15g of cheddar cheese,
    cal: 60,
    pro: 4,
    cab: 0.2,
    fat: 5
  }{
    id: 008,
    amount: 1 whole grain bun,
    cal: 150,
    pro: 6,
    cab: 26,
    fat: 1.5
  }],
  reviews: [{
    member_id: '4476',//not declared
    likes: 1,
    comment: 'This recipe looks fantastic. I really need to try it.'
  }, {
    member_id: '8273',
    likes: 11,
    comment: 'Gonna experiment a little bit'
  }]
}, { // recipe2
  name: 'Pesto Grilled Chicken',//weight loss, yield:4 servings,image link: https://skinnyms.com/wp-content/uploads/2014/04/Pesto-Grilled-Chicken-1.jpg
  method: '
1.Add the basil, garlic, nuts, cheese, and lemon juice in a food processor and blend until well combined. Slowly drizzle in the olive oil and continue blending until smooth. Season with salt and pepper.
2.Reserve 1/3 cup pesto and combine the rest with the chicken in a casserole dish or freezer bag. Marinate in the refrigerator overnight.
3.When ready to eat, preheat a gas or charcoal grill over medium heat. Grill the chicken until cooked through.
4.Serve the chicken with your favorite side dish and the reserved pesto.',
  duration: 30,
  ingredients: [{
    name: '2 cups packed basil leaves',
    cal: 20,
    pro: 2.6,
    cab: 2.2,
    fat: 0.5
  }, {
    name: '2 minced garlic cloves',
    cal: 9,
    pro: 0.38,
    cab: 1.98,
    fat: 0.03
  }{
    name: '1/3 cup raw cashews',
    cal: 320,
    pro: 9,
    cab: 13,
    fat: 26
  }{
    name: '1/2 cup grated parmesan',
    cal: 220,
    pro: 20.8,
    cab: 1.85,
    fat: 15
  }{
    name: 'juice of 1 lemon',
    cal: 12,
    pro: 1,
    cab: 4,
    fat: 0
  }{
    name: '1/2 cup extra-virgin olive oil',
    cal: 950,
    pro: 0,
    cab: 0,
    fat: 108
  }{
    name: '4 boneless, skinless chicken breasts',
    cal: 1040,
    pro: 220,
    cab: 0,
    fat: 12
  }],
  reviews: [{
    member_id: '4223',
    likes: 1,
    comment: 'I've been successful with this, a million times over, exactly as written.'
  }, {
    member_id: '9221',
    likes: 11,
    comment: 'Turned out very different than I imagined'
  }]
}, { // recipe3
  name: 'Spicy Garlic Shrimp',//weight loss, yield: 4 servings, image link: https://skinnyms.com/wp-content/uploads/2014/04/Spicy-Garlic-Shrimp.jpg
  method: '
1.Heat the olive oil over medium heat in a large skillet. Add the shrimp. Cook for 4-5 minutes or until pink in color. Remove shrimp and set aside. Add garlic and red pepper flakes, saut� for one minute.
2.Remove the skillet, add the white wine to deglaze the pan. Place the skillet back on the burner, add broth and cook until the desired thickness has been reached. Add parsley, return shrimp to skillet and toss to coat. Remove from heat and serve.
3.Serve over quinoa, rice, or your favorite whole grain.',
  duration: 30,
  ingredients: [{
    name: '2 tablespoons of olive oil',
    cal: 240,
    pro: 0,
    cab: 0,
    fat: 28
  }, {
    name: '4 cloves garlic crushed',
    cal: 18,
    pro: 0.8,
    cab: 3.99,
    fat: 0.06
  }{
    name: '1/2 teaspoon red pepper flakes',
    cal: 3,
    pro: 0,
    cab: 0.5,
    fat: 0
  }{
    name: '2 dozen jumbo raw shrimp, deveined',
    cal: 86,
    pro: 16.5,
    cab: 0.74,
    fat: 1.4
  }{
    name: '1/4 cup dry white wine',
    cal: 20,
    pro: 0.02,
    cab: 0.2,
    fat: 0
  }{
    name: '1/4 cup chicken broth, fat free',
    cal: 3,
    pro: 0.24,
    cab: 0.38,
    fat: 0
  }{
    name: '1/4 cup freshly chopped parsley',
    cal: 5,
    pro: 0.45,
    cab: 0.95,
    fat: 0.12
  }],
  reviews: [{
    member_id: '6585',
    likes: 1,
    comment: 'It's the best!!'
  }, {
    member_id: '9756',
    likes: 11,
    comment: 'Intriguing... '
  }]
} { // recipe4
  name: 'Clean Eating Jalape�o Popper Mac and Cheese',//weight loss,yield: 6 servings,image link: https://skinnyms.com/wp-content/uploads/2016/04/Clean-Eating-Jalape%C3%B1o-Popper-Mac-and-Cheese-.jpg 
  method: '
Preheat oven to 400 degrees F.
1.In a large saucepan, heat the olive oil over medium heat. Add the onions and jalape�os and cook until soft, about 5 minutes. Add the garlic and continue cooking 1 more minute. Stir in the mustard powder and flour and season with salt and pepper. Stir for 1 minute.
2.Add the milk and bring to a boil, whisking constantly. Boil for 1 minute and turn off heat. Stir in 1 1/2 cups of the Colby jack and all of the cream cheese. Add the cooked pasta and stir until well coated. Transfer to a casserole dish.
3.Top with breadcrumbs and remaining cheese and bake for 30-35 minutes until top is browned and cheese is bubbly. Allow to stand for 5 minutes before serving.',
  duration: 60,
  ingredients: [{
    name: '3 cups cooked macaroni, whole grain',
    cal: 664,
    pro: 24.36,
    cab: 129.6,
    fat: 3.9
  }, {
    name: '2 tbsp olive oil',
    cal: 250,
    pro: 0,
    cab: 0,
    fat: 28
  }{
    name: '1 small onion diced',
    cal: 44,
    pro: 1.2,
    cab: 10,
    fat: 0.1
  }{
    name: '2 jalape�o peppers, seeded and diced',
    cal: 8,
    pro: 0.2,
    cab: 1.8,
    fat: 0.2
  }{
    name: '1 clove of garlic',
    cal: 4,
    pro: 0.19,
    cab: 0.99,
    fat: 0.02
  }{
    name: '1 tbsp mustard powder',
    cal: 53,
    pro: 2.79
    cab: 3.91,
    fat: 3.22
  }{
    name: '2 tbsp flour',
    cal: 28,
    pro: 0.81,
    cab: 5.96,
    fat: 0.08
  }{
    name: '2 cups low-fat milk',
    cal: 180,
    pro: 18,
    cab: 26,
    fat: 0
  }{
    name: '85g low-fat colby jack cheese',
    cal: 56,
    pro: 8,
    cab: 0.62,
    fat: 2.3
  }{
    name: '20g low-fat cream cheese',
    cal: 40,
    pro: 2,
    cab: 0.6,
    fat: 2.5
  }{
    name: '10g bread crumbs',
    cal: 35,
    pro: 1.5,
    cab: 9,
    fat: 1
  }],
  reviews: [{
    member_id: '3476',
    likes: 1,
    comment: 'Turned out very different than I imagined'
  }, {
    member_id: '3687',
    likes: 11,
    comment: 'This recipe looks fantastic. I really need to try it.'
  }]
} { // recipe5
  name: 'Saut�ed Mushrooms',//weight loss, yield: 1 servings, image link: https://skinnyms.com/wp-content/uploads/2014/04/Crazy-Good-Saut%C3%A9ed-Mushrooms-with-Fresh-Herbs.jpg
  method: '
1.Heat a large skillet over medium heat. Add the olive oil and butter. When the butter is melted, add the mushrooms.
2.Cook the mushrooms until they are brown and fragrant, approximately 10 minutes. Season with salt and pepper, and add the garlic. Cook for 1 more minute.
3.Add the balsamic vinegar and stir. Mix in the fresh herbs and serve.',
  duration: 15,
  ingredients: [{
    name: '55g mushrooms of your choice, sliced',
    cal: 12.5,
    pro: 2,
    cab: 2,
    fat: 0.25
  }, {
    name: '1 teaspoon olive oil',
    cal: 40,
    pro: 0,
    cab: 0,
    fat: 5
  }{
    name: '2 teaspoons pure butter',
    cal: 70,
    pro: 0,
    cab: 0,
    fat: 10
  }{
    name: '1 clove garlic',
    cal: 4,
    pro: 0.2,
    cab: 1,
    fat: 0.02
  }{
    name: '1 tablespoon balsamic vinegar',
    cal: 13,
    pro: 0,
    cab: 3,
    fat: 0
  }{
    name: '1 teaspoon freshly chopped thyme',
    cal: 0,
    pro: 0.04,
    cab: 0.1,
    fat: 0.01
  }{
    name: '1 teaspoon freshly chopped rosemary',
    cal: 1,
    pro: 0.02,
    cab: 0.14,
    fat: 0.04
  }],
  reviews: [{
    member_id: '6325',
    likes: 1,
    comment: 'I've been successful with this, a million times over, exactly as written.'
  }, {
    member_id: '8657',
    likes: 11,
    comment: 'Intriguing...'
  }]
} { // recipe6
  name: 'Loaded Spaghetti',//weight loss, serves 1, image link: https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/images/wh0914sdo-flatbelly01-dinner-0-1522860282.jpg?resize=768:*
  method: 'Saut� peppers and onions in oil until onions are translucent. Toss with pasta and edamame.',
  duration: 20,
  ingredients: [{
    name: '1 cup sliced bell pepper',
    cal: 46,
    pro: 2,
    cab: 9,
    fat: 0
  }, {
    name: '1/2 cup sliced red onion',
    cal: 30,
    pro: 1,
    cab: 7,
    fat: 0
  } {
    name: '1 tsp olive oil',
    cal: 40,
    pro: 0,
    cab: 0,
    fat: 5
  } {
    name: '1 cup cooked whole-wheat spaghetti',
    cal: 174,
    pro: 7.5,
    cab: 37.2,
    fat: 0.76
  } {
    name: '2/3 cup cooked edamame',
    cal: 110,
    pro: 11,
    cab: 7,
    fat: 5
  }],
  reviews: [{//TODO
    member_id: '1231',
    likes: 1,
    comment: 'Turned out very different than I imagined'
  }, {
    member_id: '3452',
    likes: 11,
    comment: 'It's the best!!'
  }]
} { // recipe7
  name: 'Summer Farrotto',//weight loss, serves 1, image link: https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/images/1406-fbd5-0-1522859712.jpg?resize=768:*
  method: 'Pan-sear chicken in 1 Tbsp oil, seasoning with salt and pepper to taste, then dice. Saut� onion and squash with remaining oil. Stir in farro until coated in oil. Add 2/3 cup water, bring to a boil, stir, reduce heat, and cover. Cook 20 minutes or until soft. Stir in chicken, parsley, and cheese, and serve.',
  duration: 20,
  ingredients: [{
    name: '1 boneless, skinless chicken breast',
    cal: 140,
    pro: 27,
    cab: 0,
    fat: 2
  }, {
    name: '2 Tbsp olive oil, divided',
    cal: 250,
    pro: 0,
    cab: 0,
    fat: 28
  }{
    name: '1/4 cup sliced red onion',
    cal: 17,
    pro: 0,
    cab: 4,
    fat: 0
  }{
    name: '1 cup diced yellow squash',
    cal: 18,
    pro: 1.4,
    cab: 3.4,
    fat: 0.2
  }{
    name: '1/2 cup dry farro',
    cal: 160,
    pro: 7,
    cab: 33,
    fat: 0
  }{
    name: '1 Tbsp chopped parsley',
    cal: 4,
    pro: 0.29,
    cab: 0.67,
    fat: 0.06
  }{
    name: '1 Tbsp grated Parmesan cheese',
    cal: 25,
    pro: 2,
    cab: 0,
    fat: 2
  }],
  reviews: [{
    member_id: '9734',
    likes: 1,
    comment: 'Gonna experiment a little bit'
  }, {
    member_id: '4423',
    likes: 11,
    comment: 'I've been successful with this, a million times over, exactly as written.'
  }]
} { // recipe8
  name: 'Pork with veggies',//weight loss, serves 1, image link: https://www.womenshealthmag.com/weight-loss/a20052572/healthy-dinner-recipes-0/
  method: 'Season pork with salt and pepper, sear in an ovenproof skillet coated with cooking spray, and transfer to a 450�F oven for 15 minutes. Slice and serve with green beans topped with almonds, and a sweet potato.',
  duration: 20,
  ingredients: [{
    name: '1 pork tenderloin',
    cal: 143,
    pro: 26,
    cab: 0,
    fat: 3.5
  }, {
    name: '1 cup steamed green beans',
    cal: 31,
    pro: 2,
    cab: 4,
    fat: 0
  }{
    name: '2 Tbsp sliced almonds',
    cal: 62,
    pro: 2.28,
    cab: 2,
    fat: 5.5
  }{
    name: '1 baked sweet potato',
    cal: 103,
    pro: 2.3,
    cab: 24,
    fat: 0.2
  }],
  reviews: [{
    member_id: '4879',
    likes: 1,
    comment: 'Didn't like it.. lots of jarring tastes'
  }, {
    member_id: '8987',
    likes: 11,
    comment: 'Intriguing...'
  }]
} { // recipe9
  name: 'Baked chicken with mushroom and sweet potato',//weight loss, serves 1, image link: https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/images/wh0413sdo-flatbelly01-1516714472.jpg?resize=768:*
  method: 'In a 350�F oven, bake chicken, topped with mushrooms, chives, and oil, for 15 minutes. Microwave sweet potato for five to seven minutes.',
  duration: 10 ,
  ingredients: [{
    name: '1/2 skinless chicken breast',
    cal: 50,
    pro: 11,
    cab: 0,
    fat: 2
  }, {
    name: '1 cup baby portobello mushrooms',
    cal: 22,
    pro: 2.1,
    cab: 4.36,
    fat: 0.17
  }{
    name: '1 Tbsp chives',
    cal: 1,
    pro: 0.1,
    cab: 0.13,
    fat: 0.02
  }{
    name: '1 Tbsp olive oil',
    cal: 125,
    pro: 0,
    cab: 0,
    fat: 14
  }{
    name: '1 medium sweet potato',
    cal: 103,
    pro: 2,
    cab: 24,
    fat: 0
  }],
  reviews: [{
    member_id: '9743',
    likes: 1,
    comment: 'This recipe looks fantastic. I really need to try it'
  }, {
    member_id: '1349',
    likes: 11,
    comment: 'It's the best!!'
  }]
} { // recipe10
  name: 'Pork with roasted vegetables',//weight loss, serves 1, image link: https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/images/1205-fbd-1516714308.jpg?resize=768:*
  method: 'Roast pork tenderloin at 375�F, then serve with vegetables.',
  duration: 30,
  ingredients: [{
    name: '3 oz pork tenderloin',
    cal: 122,
    pro: 22,
    cab: 0,
    fat: 3
  }, {
    name: '1 cup baked cubed butternut squash',
    cal: 63,
    pro: 1.4,
    cab: 16.4,
    fat: 0.14
  }{
    name: '2 cups brussels sprouts cooked in 1 Tbsp olive oil',
    cal: 76,
    pro: 6,
    cab: 8,
    fat: 0
  }{
    name: '1/2 tsp salt',
    cal: 0,
    pro: 0,
    cab: 0,
    fat: 0
  }{
    name: '1 tsp black pepper',
    cal: 5,
    pro: 0,
    cab: 1,
    fat: 0
  }],
  reviews: [{
    member_id: '7283',
    likes: 1,
    comment: 'Didn't like it.. lots of jarring tastes'
  }, {
    member_id: '7831',
    likes: 11,
    comment: 'Maybe try some other ingredients?'
  }]
} { // recipe11
  name: 'Mushroom Bison burger',// weight loss, serves 1, image link: https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/images/1203-fbd-1516714413.jpg?resize=768:* 
  method: 'Grill mushroom and burger, and top with onion, tomato, and lettuce on flatbread.',
  duration: 10,
  ingredients: [{
    name: '4 oz grass-fed bison burger',
    cal: 29,
    pro: 5,
    cab: 0,
    fat: 4
  }, {
    name: '1 portobello mushroom, grilled',
    cal: 4,
    pro: 0.6,
    cab: 0.6,
    fat: 0.1
  }{
    name: '1 slice red onion',
    cal: 4,
    pro: 0,
    cab: 0,
    fat: 0
  }{
    name: '2 slices tomato',
    cal: 6,
    pro: 0,
    cab: 1,
    fat: 0
  }{
    name: '2 lettuce leaves',
    cal: 15,
    pro: 1.4,
    cab: 2.9,
    fat: 0.2
  }{
    name: '1 multigrain flatbread',
    cal: 150,
    pro: 6,
    cab: 27,
    fat: 3
  }],
  reviews: [{
    member_id: '3452',
    likes: 1,
    comment: 'It's the best!!'
  }, {
    member_id: '8493',
    likes: 11,
    comment: 'Didn't like it.. lots of jarring tastes'
  }]
} { // recipe12
  name: 'Salmon with lemon and dill',// weight loss, serves 1, image link: https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/images/1112-fbd-1516714281.jpg?resize=768:*
  method: 'Sprinkle salmon with lemon juice and dill and bake for 15 minutes at 225�F.',
  duration: 15,
  ingredients: [{
    name: '5 oz wild Atlantic salmon',
    cal: 220,
    pro: 25,
    cab: 1,
    fat: 14
  }, {
    name: 'c1 Tbsp lemon juice',
    cal: 112,
    pro: 2,
    cab: 34,
    fat: 1
  }{
    name: '1 tsp dill',
    cal: 3,
    pro: 0.2,
    cab: 0.56,
    fat: 0.04
  }{
    name: '2/3 cup parsnips',
    cal: 71,
    pro: 1.3,
    cab: 17,
    fat: 0.3
  }{
    name: '1 1/2 cup chopped broccoli, steamed',
    cal: 45,
    pro: 3.9,
    cab: 9,
    fat: 0.54
  }],
  reviews: [{
    member_id: '9234',
    likes: 1,
    comment: 'Thanks for such an awesome recipe'
  }, {
    member_id: '2391',
    likes: 11,
    comment: 'Maybe try some other ingredients?'
  }]
} { // recipe13
  name: 'Beef stir-fry with butternut squash soup',//weight loss, serves 1,image link: https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/images/1104-fbd-1516714380.jpg?resize=768:*
  method: 'Stir-fry beef, onion, and mushroom, and serve over bulgur.',
  duration: 20,
  ingredients: [{
    name: '3 oz steak tenderloin fillet, sliced thin',
    cal: 150,
    pro: 24,
    cab: 0,
    fat: 6
  }, {
    name: '1/2 cup sliced shiitake mushrooms',
    cal: 14,
    pro: 2,
    cab: 2,
    fat: 0
  }{
    name: '1/2 onion, sliced',
    cal: 34,
    pro: 0.74,
    cab: 8.1,
    fat: 0.06
  }{
    name: '2 tsp olive oil',
    cal: 250,
    pro: 0,
    cab: 0,
    fat: 28
  }{
    name: '1/3 cup cooked bulgur',
    cal: 55,
    pro: 1.3,
    cab: 7.8,
    fat: 2.4
  }{
    name: '1/2 cup organic light-sodium butternut squash soup',
    cal: 40,
    pro: 2.3,
    cab: 18,
    fat: 2.05
  }],
  reviews: [{
    member_id: '1293',
    likes: 1,
    comment: 'Gonna experiment a little bit'
  }, {
    member_id: '9743',
    likes: 11,
    comment: 'My family loves this recipe'
  }]
} { // recipe14
  name: 'Spiced Green Tea Smoothie',//weight loss, serves 1, image link: https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-img.health.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Flarge_16_9%2Fpublic%2Fstyles%2Fmain%2Fpublic%2FSpiced_Green_Tea-XL.jpg%3Fitok%3DUnAGUS6g&w=800&q=85
  method: 'Put all ingredients in blender. Blend until smooth. Drink cold.',
  duration: 5,
  ingredients: [{
    name: '3/4 cup strong green tea, chilled',
    cal: 1.5,
    pro: 0,
    cab: 0.3,
    fat: 0
  }, {
    name: '1/8 teaspoon cayenne pepper',
    cal: 2,
    pro: 0,
    cab: 0,
    fat: 0
  }{
    name: '1 small pear, skin on, cut into pieces',
    cal: 75,
    pro: 1,
    cab: 18,
    fat: 0
  }{
    name: '2 tablespoons fat-free plain yogurt',
    cal: 60,
    pro: 23,
    cab: 9,
    fat: 0
  }],
  reviews: [{
    member_id: '7123',
    likes: 1,
    comment: 'My family loves this recipe'
  }, {
    member_id: '3942',
    likes: 11,
    comment: 'My new favorite snack'
  }]
} { // recipe15
  name: 'Chocolate dipped bananas',//weight loss, serves 1, image link: https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-img.health.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Flarge_16_9%2Fpublic%2Fstyles%2Fmain%2Fpublic%2Fchocolate-pancakes-2002262-x.jpg%3Fitok%3DTKgzsEut&w=800&q=85
  method: 'Place chocolate chips in a heavy-duty zip-top plastic bag or small microwave-safe bowl. Microwave at HIGH 1 minute or until chocolate melts. Dip banana pieces in chocolate.',
  duration: 2,
  ingredients: [{
    name: '2 tablespoons semisweet chocolate chips',
    cal: 40,
    pro: 1,
    cab: 5,
    fat: 2
  }, {
    name: '1 small banana',
    cal: 90,
    pro: 1,
    cab: 23.1,
    fat: 0.33
  }],
  reviews: [{
    member_id: '8663',
    likes: 1,
    comment: 'My new favorite snack'
  }, {
    member_id: '6349',
    likes: 11,
    comment: 'Gonna experiment a little bit'
  }]
} { // recipe16
  name: 'Breakfast barley with banana and sunflower seeds',//weight loss,serves 1, image link: https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-img.health.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_16_9%2Fpublic%2Fmigration%2Fimages%2Fslides%2Fbarley-banana-sunflower-seeds-400x400.jpg%3Fitok%3D-5_BSxQo&w=800&q=85
  method: '
1.Combine 2/3 cup water and barley in a small microwave-safe bowl. Microwave on HIGH 6 minutes.',
2.Stir and let stand 2 minutes.
3.Top with banana slices, sunflower seeds, and honey.
  duration: 5,
  ingredients: [{
    name: '2/3 cup water',
    cal: 0,
    pro: 0,
    cab: 0,
    fat: 0
  }, {
    name: '1/3 cup uncooked quick-cooking pearl barley',
    cal: 65,
    pro: 0,
    cab: 0,
    fat: 0
  }{
    name: '1 banana sliced',
    cal: 90,
    pro: 1.1,
    cab: 23.1,
    fat: 0.33
  }{
    name: '1 tbsp unsalted sunflower seeds',
    cal: 30,
    pro: 1,
    cab: 1,
    fat: 2.5
  }{
    name: '1 teaspoon honey',
    cal: 21,
    pro: 0,
    cab: 6,
    fat: 0
  }],
  reviews: [{
    member_id: '9283',
    likes: 1,
    comment: 'Thanks for such an awesome recipe'
  }, {
    member_id: '1526',
    likes: 11,
    comment: 'Intriguing...'
  }]
} { // recipe17
  name: 'Creamy avocado cups',//weight loss,serving size: 3 endive cups,image link: https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-img.health.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Flarge_16_9%2Fpublic%2Fstyles%2Fmain%2Fpublic%2Fcreamy-avocado-cups-2013002-x.jpg%3Fitok%3DIleSr7B_&w=800&q=85
  method: 'Peel, pit, and mash 1 avocado; set aside. Combine 1 tablespoon lime juice, 1 tablespoon reduced-fat sour cream or plain yogurt, 1/4 teaspoon ground cumin, and 1 tablespoon chopped fresh cilantro in a small bowl; stir in avocado. Spoon avocado mixture evenly into 12 endive leaves.',
  duration: 20,
  ingredients: [{
    name: '1 avocado',
    cal: 322,
    pro: 4,
    cab: 17,
    fat: 29
  }, {
    name: '1 tbsp lime juice',
    cal: 4,
    pro: 0.1,
    cab: 1.3,
    fat: 0.1
  }{
    name: '1 tbsp plain yoghurt',
    cal: 30,
    pro: 11,
    cab: 5,
    fat: 0
  }{
    name: '1 tbsp fresh cilantro',
    cal: 5,
    pro: 0.4,
    cab: 0.9,
    fat: 0.009
  }{
    name: '12 endive leaves',
    cal: 5,
    pro: 0.35,
    cab: 0.95,
    fat: 0.06
  }],
  reviews: [{
    member_id: '7839',
    likes: 1,
    comment: 'Intriguing...'
  }, {
    member_id: '2399',
    likes: 11,
    comment: 'My new favorite snack'
  }]
} { // recipe18
  name: 'Dark Chocolate & Oat Cluster',//weight loss, image link: https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-img.health.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Flarge_16_9%2Fpublic%2Fstyles%2Fmain%2Fpublic%2Fdark-chocolate-oat-clusters-2002350-x.jpg%3Fitok%3DdEmYHHLd&w=800&q=85
  method: '
1.Heat peanut butter, milk, and chocolate chips in a saucepan over low heat 3 minutes or until chips melt.
2.Stir in oats. Remove from heat.
3.With a spoon, small ice cream scoop, or melon baller, drop 8 ball-shaped portions on a wax paper-lined baking sheet. Let set in fridge 10 minutes.',
  duration: 10,
  ingredients: [{
    name: '2 tablespoons peanut butter',
    cal: 188,
    pro: 8.03,
    cab: 6.26,
    fat: 16.12
  }, {
    name: '2 tablespoons 1% low-fat milk',
    cal: 16,
    pro: 1.3,
    cab: 1.5,
    fat: 0.3
  }{
    name: '1/4 cup semisweet chocolate chips',
    cal: 80,
    pro: 1,
    cab: 10,
    fat: 4
  }{
    name: '3/4 cup old-fashioned rolled oats',
    cal: 225,
    pro: 8,
    cab: 41,
    fat: 5
  }],
  reviews: [{//TODO
    member_id: 4344'',
    likes: 1,
    comment: 'My new favorite snack'
  }, {
    member_id: '7575',
    likes: 11,
    comment: 'Turned out very different than I imagined'
  }]
} { // recipe19
  name: 'Avocado Whip',//weight loss, yields: 2 cups, image link: https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-img.health.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Flarge_16_9%2Fpublic%2Fstyles%2Fmain%2Fpublic%2FAvocado_Whip-XL.jpg%3Fitok%3Dj125PVHK&w=800&q=85 
  method: 'Combine all in a food processor; process until smooth (about 30 seconds). Transfer to serving dish. Garnish with fresh pepper.',
  duration: 10,
  ingredients: [{
    name: '2 avocados',
    cal: 644,
    pro: 8,
    cab: 34,
    fat: 58
  }, {
    name: '1 tablespoon tahini',
    cal: 89,
    pro: 2.6,
    cab: 3.2,
    fat: 7.9
  }{
    name: '1/4 teaspoon kosher salt',
    cal: 0,
    pro: 0,
    cab: 0,
    fat: 0
  }{
    name: '1/4 teaspoon fresh pepper',
    cal: 1,
    pro: 0.06,
    cab: 0.34,
    fat: 0.02
  }],
  reviews: [{
    member_id: '8364',
    likes: 1,
    comment: 'Maybe try some other ingredients?'
  }]
} { // recipe20
  name: 'Ham, Sliced Pear & Swiss Sandwich',// weight loss, serves 1, image link: https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-img.health.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Flarge_16_9%2Fpublic%2Fstyles%2Fmain%2Fpublic%2Fham-pear-swiss-1993198-x.jpg%3Fitok%3DIwx9t4op&w=800&q=85
  method: '
1.Combine yogurt and dill in a small bowl, stirring until blended.
2.Spread yogurt mixture on bread slices. Top 1 bread slice with ham, half of pear slices, cheese, and remaining bread slice. Serve with remaining pear slices on the side.',
  duration: 10,
  ingredients: [{
    name: '1 tablespoon plain Greek-style low-fat yogurt',
    cal: 13,
    pro: 3,
    cab: 1,
    fat: 0
  }, {
    name: '1/4 teaspoon dried dill',
    cal: 1,
    pro: 0.05,
    cab: 0.14,
    fat: 0.01
  }{
    name: '2 slices pumpernickel bread',
    cal: 140,
    pro: 3,
    cab: 29,
    fat: 1
  },{
    name: '1 ounce lean sliced ham',
    cal: 31,
    pro: 4.9,
    cab: 0.75,
    fat: 0.81
  },{
    name: '1 small pear, thinly sliced',
    cal: 81,
    pro: 0.53,
    cab: 21.5,
    fat: 0.17
  },{
    name: '1- ounce slice Swiss cheese',
    cal: 106,
    pro: 8,
    cab: 2,
    fat: 8
  }],
  reviews: [{
    member_id: '8736',
    likes: 1,
    comment: 'Thanks for such an awesome recipe'
  }, {
    member_id: '2131',
    likes: 11,
    comment: 'It's the best!!'
  }]
} { // recipe21
  name: 'Mushroom Ratatouille',//serves 2, weight loss, image: http://www.weightloss.com.au/assets/Uploads/Recipes/mushroom-ratatouille-lge.jpg
  method: '
1.Boil your kettle with water. In a bowl add your couscous, hot water, season with salt and pepper. Place cling wrap over bowl and let sit for a couple of minutes until the water has been absorbed. Take off cling film and squeeze your lemon then fluff with fork, set aside.
2.In a non-stick fry pan heat your olive oil on medium heat. Add onion and capsicum and stir until cooked. Add mushrooms, season with salt and pepper to taste, cooking a further minute or two until mushrooms have started to collapse. Now add garlic and tomato, sprinkle oregano over, drizzle your balsamic vinegar and vegetable stock. Check to see if you need more seasoning. Let simmer on low heat for a couple of minutes.
3.Serve with your couscous.',
  duration: 30,
  ingredients: [{
    name: '4 large field or Portobello mushrooms',
    cal: 33,
    pro: 5,
    cab: 6,
    fat: 1
  }, {
    name: '� onion, sliced chunky',
    cal: 23,
    pro: 0.51,
    cab: 5.56,
    fat: 0.04
  },{
    name: '1 clove garlic, crushed',
    cal: 4,
    pro: 0.19,
    cab: 0.99,
    fat: 0.02
  }{
    name: '� red capsicum',
    cal: 15,
    pro: 0.59,
    cab: 3.6,
    fat: 0.18
  }{
    name: '� cup vegetable stock',
    cal: 67,
    pro: 8.35,
    cab: 8,
    fat: 0.1
  }{
    name: '1 fresh tomato',
    cal: 10,
    pro: 0,
    cab: 2,
    fat: 0
  }{
    name: '2 tbsp. balsamic vinegar',
    cal: 13,
    pro: 0,
    cab: 3,
    fat: 0
  }],
  reviews: [{
    member_id: '3874',
    likes: 1,
    comment: 'Didn't like it.. lots of jarring tastes'
  }, {
    member_id: '3844',
    likes: 11,
    comment: 'My family loves this recipe'
  }]
} { // recipe22
  name: 'Cookout for one',//weight loss, serves 1, image: https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/images/1407-flatbelly3-1522859723.jpg?resize=768:*
  method: 'Cook hot dog, and heat baked beans in a saucepan. Serve hot dog in the bun, topped with mustard and relish, with beans and melon on the side.',
  duration: 20,
  ingredients: [{
    name: '1 organic beef hot dog',
    cal: 70,
    pro: 6,
    cab: 0,
    fat: 6
  }, {
    name: '1/2 cup organic baked beans',
    cal: 191,
    pro: 7,
    cab: 27.06,
    fat: 6.5
  },{
    name: '1 whole-wheat hot dog bun',
    cal: 140,
    pro: 7,
    cab: 23,
    fat: 2
  },{
    name: '1/2 Tbsp whole-grain mustard',
    cal: 26,
    pro: 1.4,
    cab: 1.96,
    fat: 1.6
  },{
    name: '1 cup sliced honeydew melon',
    cal: 61,
    pro: 0.92,
    cab: 15.45,
    fat: 0.24
  }],
  reviews: [{
    member_id: '8364',
    likes: 1,
    comment: 'Tastes fantastic'
  }, {
    member_id: '8973',
    likes: 11,
    comment: 'My family loves this recipe'
  }]
} { // recipe23
  name: 'Bow ties with spring vegetables',//weight loss, image: https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/images/fast-past-6-0-1522252797.jpg?resize=768:*
  method: 'Cook pasta as directed and toss with oil, vegetables, and mint. Season with salt and pepper to taste.',
  duration: 20,
  ingredients: [{
    name: '2 oz dry whole-grain farfalle pasta',
    cal: 198,
    pro: 8.4,
    cab: 43,
    fat: 0.8
  }, {
    name: '1/2 cup artichoke hearts',
    cal: 58,
    pro: 2.9,
    cab: 9.4,
    fat: 1.98
  },{
    name: '1/4 cup sliced red onion',
    cal: 17,
    pro: 0,
    cab: 4,
    fat: 0
  },{
    name: '1/4 cup peas',
    cal: 29,
    pro: 8,
    cab: 21,
    fat: 1
  },{
    name: '1 Tbsp chopped fresh mint',
    cal: 2.5,
    pro: 0,
    cab: 0.5,
    fat: 0
  }],
  reviews: [{
    member_id: '2732',
    likes: 1,
    comment: 'Intriguing...'
  }, {
    member_id: '9342',
    likes: 11,
    comment: 'Turned out much better than I imagined'
  }]
} { // recipe24
  name: 'Pizza party',//image: https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/images/1312-flat-belly-05-0-1516714475.jpg?resize=768:*
  method: 'Bake pizza. Blend slaw, beans, scallions, oil, and lemon juice, and serve on the side.',
  duration: 30,
  ingredients: [{
    name: '1 readymade Italian vegetable pizza',
    cal: 280,
    pro: 13,
    cab: 36,
    fat: 6
  }, {
    name: '3 oz broccoli slaw',
    cal: 175,
    pro: 2,
    cab: 10,
    fat: 14
  }, {
    name: '1/4 cup black beans',
    cal: 55,
    pro: 2,
    cab: 10,
    fat: 0
  }, {
    name: '1/4 cup sliced scallions',
    cal: 36,
    pro: 1,
    cab: 8,
    fat: 0
  }, {
    name: '1 oz lemon juice',
    cal: 8,
    pro: 0,
    cab: 0,
    fat: 0
  }],
  reviews: [{
    member_id: '2368',
    likes: 1,
    comment: 'I've been successful with this, a million times over, exactly as written.'
  }, {
    member_id: '4321',
    likes: 11,
    comment: 'Maybe try some other ingredients?'
}]
} { // recipe25
  name: 'Light lasagna', //image: https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/images/1301-flat-belly-5-0-1516714434.jpg?resize=768:*
  method: 'Combine pasta, ricotta, sauce, and chili flakes, then crumble sausage on top. Add spinach, and let wilt.',
  duration: 30,
  ingredients: [{
    name: '1/2 cup cooked whole-wheat spaghetti',
    cal: 86,
    pro: 3.7,
    cab: 18.5,
    fat: 0.38
  }, {
    name: '1/4 cup part-skim ricotta',
    cal: 85,
    pro: 7,
    cab: 3.15,
    fat: 4.8
  }{
    name: '1/3 cup prepared tomato sauce',
    cal: 26,
    pro: 1.07,
    cab: 6,
    fat: 0.19
  },{
    name: '1/2 tsp crushed red chili flakes',
    cal: 6,
    pro: 0,
    cab: 1,
    fat: 0
  },{
    name: '1 Italian Chicken Sausage link, cooked',
    cal: 130,
    pro: 15,
    cab: 2,
    fat: 8
  },{
    name: '2 cups spinach',
    cal: 14,
    pro: 1.72,
    cab: 2.2,
    fat: 0.23
  }],
  reviews: [{
    member_id: '3294',
    likes: 1,
    comment: 'Delicious'
  }, {
    member_id: '3972',
    likes: 11,
    comment: 'This recipe looks fantastic. I really need to try it'
  }]
} { // recipe26
  name: 'Chicken with broccoli dip',//image: https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/images/1211-flat-belly-5-0-1516714408.jpg?resize=768:*
  method: 'Steam broccoli and parsnips, then puree with stock and cheddar; sprinkle with nuts. Bake chicken, top with lemon juice, and season.',
  duration: 20,
  ingredients: [{
    name: '1 cup chopped broccoli',
    cal: 31,
    pro: 3,
    cab: 6,
    fat: 0
  }, {
    name: '1 cup chopped parsnips',
    cal: 55,
    pro: 1.03,
    cab: 13.3,
    fat: 0.23
  }{
    name: '3/4 cup nonfat chicken stock',
    cal: 9,
    pro: 0.7,
    cab: 1.13,
    fat: 0.22
  },{
    name: '4 oz chicken breast',
    cal: 184,
    pro: 34,
    cab: 0,
    fat: 4
  },{
    name: '1 tsp lemon juice',
    cal: 112,
    pro: 2,
    cab: 34,
    fat: 1
  }],
  reviews: [{
    member_id: '8237',
    likes: 1,
    comment: 'It's the best!!'
  }, {
    member_id: '8483',
    likes: 11,
    comment: 'Thanks for such an awesome recipe'
  }]
} { // recipe27
  name: 'Cilantro shrimp with squash,chard and wild rice',//image: https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/images/1210-flat-belly-05-0-1516714347.jpg?resize=768:* 
  method: 'Sear shrimp in olive oil over medium heat for three to four minutes, seasoning with cilantro and lime juice. Steam squash and chard for five to seven minutes, and cook rice according to package directions.',
  duration: 15,
  ingredients: [{
    name: '8 large shrimp',
    cal: 69,
    pro: 13,
    cab: 1,
    fat: 1
  }, {
    name: '1 Tbsp olive oil',
    cal: 0.2,
    pro: 0,
    cab: 0,
    fat: 0
  }, {
    name: '2 tsp fresh lime juice',
    cal: 4,
    pro: 0.1,
    cab: 1.3,
    fat: 0.1
  }, {
    name: '1 yellow squash, sliced',
    cal: 18,
    pro: 1.4,
    cab: 3.8,
    fat: 0.2
  }, {
    name: '1 cup Swiss chard',
    cal: 35,
    pro: 3.29,
    cab: 7.2,
    fat: 0.14
  }, {
    name: '1/4 cup dry wild rice blend',
    cal: 160,
    pro: 4,
    cab: 35,
    fat: 1
  }],
  reviews: [{
    member_id: '2982',
    likes: 1,
    comment: 'Gonna experiment a little bit'
  }, {
    member_id: '232',
    likes: 11,
    comment: 'My new favorite snack'
  }]
} { // recipe28
  name: 'Pork with roasted vegetables',//image: https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/images/1205-fbd-1516714308.jpg?resize=768:*
  method: 'Roast pork tenderloin at 375�F, then serve with vegetables.',
  duration: 20,
  ingredients: [{
    name: '3 oz pork tenderloin',
    cal: 122,
    pro: 22,
    cab: 0,
    fat: 3
  }, {
    name: '1 cup baked cubed butternut squash',
    cal: 63,
    pro: 1,
    cab: 16,
    fat: 0
  }, {
    name: '2 cups brussels sprouts cooked in 1 Tbsp olive oil',
    cal: 56,
    pro: 4,
    cab: 11,
    fat: 0.8
  }, {
    name: '1 tsp black pepper',
    cal: 5,
    pro: 0,
    cab: 0,
    fat: 0
  }],
  reviews: [{
    member_id: '1234',
    likes: 1,
    comment: 'Maybe try some other ingredients?'
  }, {
    member_id: '2345',
    likes: 11,
    comment: 'I've been successful with this, a million times over, exactly as written.'
  }]
} { // recipe29
  name: 'Seared scallops',//image: https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/images/1110-fbd-1516714415.jpg?resize=768:*
  method: 'Heat canola oil in a large nonstick skillet over high heat. Add scallops and cook without stirring until well browned, around two minutes. Flip scallops and cook until the sides are firm and centers opaque, 30 to 90 seconds. Drizzle with lemon juice, and sprinkle sage on top.',
  duration: 5,
  ingredients: [{
    name: '2 tsp canola oil',
    cal: 80,
    pro: 0,
    cab: 0,
    fat: 0
  }, {
    name: '3 oz sea scallops',
    cal: 185,
    pro: 15.43,
    cab: 8.9,
    fat: 9.3
  }, {
    name: '2 tsp lemon juice',
    cal: 6,
    pro: 0.12,
    cab: 1.9,
    fat: 0.09
  }, {
    name: '1/2 tsp ground sage',
    cal: 1,
    pro: 0.04,
    cab: 0.21,
    fat: 0.04
  }],
  reviews: [{
    member_id: '2487',
    likes: 1,
    comment: 'Intriguing...'
  }, {
    member_id: '332',
    likes: 11,
    comment: 'Gonna experiment a little bit'
  }]
} { // recipe30
  name: 'Chicken parmigiana with penne',//image: https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/images/1011-fbd-1516714275.jpg?resize=768:*
  method: 'Saut� spinach in one teaspoon olive oil, and toss with chicken, penne, and tomato sauce. Top with Parmesan.',
  duration: 10,
  ingredients: [{
    name: '4 oz grilled chicken, diced',
    cal: 10,
    pro: 0,
    cab: 0,
    fat: 0
  }, {
    name: '1/2 cup tomato sauce',
    cal: 135,
    pro: 3,
    cab: 32,
    fat: 1
  }, {
    name: 'c1 cup spinach',
    cal: 7,
    pro: 0.9,
    cab: 1.1,
    fat: 0.1
  }, {
    name: '1/2 cup whole-wheat penne',
    cal: 110,
    pro: 4,
    cab: 21.5,
    fat: 0.65
  }, {
    name: '1/2 Tbsp grated Parmesan',
    cal: 330,
    pro: 0,
    cab: 0,
    fat: 13
  }],
  reviews: [{
    member_id: '4432',
    likes: 1,
    comment: 'Didn't like it.. lots of jarring tastes'
  }, {
    member_id: '9343',
    likes: 11,
    comment: 'It's the best!!'
  }]
}];

let mealplans = [{
  title: 'Weight loss regime',
  member_id: 1,
  time_slots: [{
    day: 'MON',
    meal_type: 'BREAKFAST',
    recipe_id: 54 
  }, {
    day: 'MON',
    meal_type: 'LUNCH',
    recipe_id: 32
  }, {
    day: 'MON',
    meal_type: 'DINNER',
    recipe_id: 17
  }][{
    day: 'TUE',
    meal_type: 'BREAKFAST',
    recipe_id: 09 
  }, {
    day: 'TUE',
    meal_type: 'LUNCH',
    recipe_id: 34
  }, {
    day: 'TUE',
    meal_type: 'DINNER',
    recipe_id: 77
  }][{
    day: 'WED',
    meal_type: 'BREAKFAST',
    recipe_id: 45
  }, {
    day: 'WED',
    meal_type: 'LUNCH',
    recipe_id: 23
  }, {
    day: 'WED',
    meal_type: 'DINNER',
    recipe_id: 99
  }][{
    day: 'THU',
    meal_type: 'BREAKFAST',
    recipe_id: 85
  }, {
    day: 'THU',
    meal_type: 'LUNCH',
    recipe_id: 12
  }, {
    day: 'THU',
    meal_type: 'DINNER',
    recipe_id: 25
  }][{
    day: 'FRI',
    meal_type: 'BREAKFAST',
    recipe_id: 23
  }, {
    day: 'FRI',
    meal_type: 'LUNCH',
    recipe_id: 64
  }, {
    day: 'FRI',
    meal_type: 'DINNER',
    recipe_id: 26
  }][{
    day: 'SAT',
    meal_type: 'BREAKFAST',
    recipe_id: 95
  }, {
    day: 'SAT',
    meal_type: 'LUNCH',
    recipe_id: 94
  }, {
    day: 'SAT',
    meal_type: 'DINNER',
    recipe_id: 1
  }][{
    day: 'SUN',
    meal_type: 'BREAKFAST',
    recipe_id: 17 
  }, {
    day: 'SUN',
    meal_type: 'LUNCH',
    recipe_id: 33
  }, {
    day: 'SUN',
    meal_type: 'DINNER',
    recipe_id: 32    //I didn't really know what to do here, but I didnt make any changes to fiona's skeleton of data 
  }]
}]
