'use restrict';

module.exports = () => {

  let users = [{
    email: 'synexenel1416@yopmail.com',
    username: 'BeggarlySunflower36',
    password: '123',
    nameGiven: 'Bobbie',
    nameFamily: 'Richmond',
    birthday: '5 February 1979',
    goal: 'Lose weight',
    calories_goal: 1500
  }, {
    email: 'qubonnybac4423@yopmail.com',
    username: 'FoodLymph',
    password: '123',
    nameGiven: 'Willem',
    nameFamily: 'Reyes',
    birthday: '4 January 1974',
    goal: 'Gain muscle',
    calories_goal: 3500
  }, {
    email: 'uzocidez6524@yopmail.com',
    username: 'PastaHostile',
    password: '123',
    nameGiven: 'Daanyaal',
    nameFamily: 'Dolan',
    birthday: '17 June 1983',
    goal: 'Gain muscle',
    calories_goal: 2500
  }, {
    email: 'evettarra6708@yopmail.com',
    username: 'CrabBaby',
    password: '123',
    nameGiven: 'Joao ',
    nameFamily: 'Rodriguez',
    birthday: '25 November 1963',
    goal: 'Lose weight',
    calories_goal: 1000
  }, {
    email: 'appekasy3468@yopmail.com',
    username: 'Lincolnhigh',
    password: '123',
    nameGiven: 'Ela',
    nameFamily: 'Guerra',
    birthday: '25 November 1986',
    goal: 'Gain muscle',
    calories_goal: 1500
  }];


  let recipes = [{ // 30 recipes
    name: 'Spicy Southwestern Vegetarian Burger', //weight loss, Yield: 1 burger, image link: https://skinnyms.com/wp-content/uploads/2014/04/Spicy-Southwestern-Vegetarian-Burger.jpg
    method: '1.In a large skillet add 1 tablespoon oil, turn to medium-low heat and saut� onions until tender, about 4 minutes.Add garlic and saute one additional minute.Add kidney beans, green chili peppers and corn, continue to saut� until beans soften up, about 3 minutes.Add oregano, chili powder, cumin and cayenne pepper, stir to combine.\n 2.Combine in a large mixing bowl bean mixture, cheese and bread crumbs.\n 3.Mash all ingredients with a potato masher or fork until beans are well mashed.Allow to cool for 10 minutes.\n 4.Make 5 burger shaped patties.Note: Patties can be cooked right away or covered and refrigerated for up to 24 hours.\n 5.Add remaining tablespoon oil to a non - stick large skillet, turn to medium heat and cook until patties are browned on both sides and heated through, approximately 12 minutes total.\n 6.Serve patties on your favorite bun or roll.Try your favorite condiments',
    duration: 40,
    ingredients: [{
      id: 001,
      name: 'olive oil',
      amount: 2,
      uom: 'tablespoons',
      cal: 120,
      pro: 0,
      cab: 0,
      fat: 14
    }, {
      id: 002,
      name: 'red onions',
      amount: 70,
      uom: 'grams',
      cal: 0.42,
      pro: 0.01,
      cab: 0.1,
      fat: 0
    }, {
      id: 003,
      name: 'garlic',
      amount: 1,
      uom: 'clove',
      cal: 4,
      pro: 0,
      cab: 1,
      fat: 0
    }, {
      id: 004,
      name: 'kidney beans',
      amount: 50,
      uom: 'grams',
      cal: 3,
      pro: 0.0,
      cab: 0.6,
      fat: 0.008
    }, {
      id: 005,
      name: 'green chili peppers',
      amount: 65,
      uom: 'grams',
      cal: 0.4,
      pro: 0.02,
      cab: 0.09,
      fat: 0.005
    }, {
      id: 006,
      name: 'fresh corn',
      amount: 20,
      uom: 'grams',
      cal: 0.86,
      pro: 0.03,
      cab: 0.19,
      fat: 0.01
    }, {
      id: 007,
      name: 'cheddar cheese',
      amount: 15,
      uom: 'grams',
      cal: 4,
      pro: 0.24,
      cab: 0.001,
      fat: 0.35
    }, {
      id: 008,
      name: 'whole grain bun',
      amount: 1,
      uom: null,
      cal: 130,
      pro: 5,
      cab: 24,
      fat: 2.5
    }],
    reviews: [{
      memberno: '4476',
      likes: 1,
      content: 'This recipe looks fantastic. I really need to try it.'
    }, {
      memberno: '8273',
      likes: 11,
      content: 'Gonna experiment a little bit'
    }]
  }, { // recipe2
    name: 'Pesto Grilled Chicken',//weight loss, yield:4 servings,image link: https://skinnyms.com/wp-content/uploads/2014/04/Pesto-Grilled-Chicken-1.jpg
    method: '1.Add the basil, garlic, nuts, cheese, and lemon juice in a food processor and blend until well combined.Slowly drizzle in the olive oil and continue blending until smooth.Season with salt and pepper.\n 2.Reserve 1/3 cup pesto and combine the rest with the chicken in a casserole dish or freezer bag. Marinate in the refrigerator overnight.\n 3.When ready to eat, preheat a gas or charcoal grill over medium heat.Grill the chicken until cooked through.\n 4.Serve the chicken with your favorite side dish and the reserved pesto.',
    duration: 30,
    ingredients: [{
      id: 009,
      name: 'basil leaves',
      amount: 50,
      uom: 'grams',
      cal: 0.1,
      pro: 0.13,
      cab: 0.23,
      fat: 0.03
    }, {
      id: 003,
      name: 'garlic',
      amount: 2,
      uom: 'cloves',
      cal: 4,
      pro: 0.19,
      cab: 0.99,
      fat: 0.02
    }, {
      id: 011,
      name: 'raw cashews',
      amount: 40,
      uom: 'grams',
      cal: 5.5,
      pro: 0.17,
      cab: 0.31,
      fat: 0.42
    }, {
      id: 012,
      name: 'parmesan',
      amount: 50,
      uom: 'grams',
      cal: 4.4,
      pro: 0.38,
      cab: 0.04,
      fat: 0.28
    }, {
      id: 013,
      name: 'lemon juice',
      amount: 5,
      uom: 'tablespoons',
      cal: 4,
      pro: 0.1,
      cab: 1.1,
      fat: 0.1
    }, {
      id: 001,
      name: 'olive oil',
      amount: 120,
      uom: 'millilitres',
      cal: 8.9,
      pro: 0,
      cab: 0,
      fat: 1
    }, {
      id: 015,
      name: 'chicken breasts',
      amount: 460,
      uom: 'grams',
      cal: 1.65,
      pro: 0.3,
      cab: 0,
      fat: 0.03
    }],
    reviews: [{
      memberno: '4223',
      likes: 1,
      content: 'I\'ve been successful with this, a million times over, exactly as written.'
    }, {
      memberno: '9221',
      likes: 11,
      content: 'Turned out very different than I imagined'
    }]
  }, { // recipe3
    name: 'Spicy Garlic Shrimp',//weight loss, yield: 4 servings, image link: https://skinnyms.com/wp-content/uploads/2014/04/Spicy-Garlic-Shrimp.jpg
    duration: 30,
    ingredients: [{
      id: 001,
      name: 'olive oil',
      amount: 2,
      uom: 'tablespoon',
      cal: 120,
      pro: 0,
      cab: 0,
      fat: 14
    }, {
      id: 003,
      name: 'garlic',
      amount: 4,
      uom: 'cloves',
      cal: 4,
      pro: 0.19,
      cab: 0.99,
      fat: 0.02
    }, {
      id: 016,
      name: 'red pepper flakes',
      amount: 0.5,
      uom: 'teaspoon',
      cal: 5,
      pro: 0.2,
      cab: 1,
      fat: 0.3
    }, {
      id: 017,
      name: 'raw shrimp',
      amount: 230,
      uom: 'grams',
      cal: 1.05,
      pro: 0.2,
      cab: 0.001,
      fat: 0.01
    }, {
      id: 018,
      name: 'white wine',
      amount: 62,
      uom: 'millilitres',
      cal: 0.81,
      pro: 0,
      cab: 0.02,
      fat: 0
    }, {
      id: 019,
      name: 'chicken broth',
      amount: 50,
      uom: 'millilitres',
      cal: 4.6,
      pro: 0.28,
      cab: 0.30,
      fat: 0.23
    }, {
      id: 020,
      name: 'parsley',
      amount: 5,
      uom: 'grams',
      cal: 0.36,
      pro: 0.03,
      cab: 0.06,
      fat: 0.008
    }],
    reviews: [{
      memberno: '6585',
      likes: 1,
      content: 'It\'s the best!!'
    }, {
      memberno: '9756',
      likes: 11,
      content: 'Intriguing... '
    }]
  }, { // recipe4
    name: 'Clean Eating Jalape�o Popper Mac and Cheese',//weight loss,yield: 6 servings,image link: https://skinnyms.com/wp-content/uploads/2016/04/Clean-Eating-Jalape%C3%B1o-Popper-Mac-and-Cheese-.jpg
    method: ' Preheat oven to 400 degrees F.\n 1.In a large saucepan, heat the olive oil over medium heat.Add the onions and jalape�os and cook until soft, about 5 minutes.Add the garlic and continue cooking 1 more minute.Stir in the mustard powder and flour and season with salt and pepper.Stir for 1 minute.\n 2.Add the milk and bring to a boil, whisking constantly.Boil for 1 minute and turn off heat.Stir in 1 1/2 cups of the Colby jack and all of the cream cheese. Add the cooked pasta and stir until well coated. Transfer to a casserole dish.\n 3.Top with breadcrumbs and remaining cheese and bake for 30 - 35 minutes until top is browned and cheese is bubbly.Allow to stand for 5 minutes before serving.',
    duration: 60,
    ingredients: [{
      id: 021,
      name: 'macaroni whole grain',
      amount: 300,
      uom: 'grams',
      cal: 3.7,
      pro: 0.12,
      cab: 0.75,
      fat: 0.01
    }, {
      id: 001,
      name: 'olive oil',
      amount: 2,
      uom: 'tablespoon',
      cal: 120,
      pro: 0,
      cab: 0,
      fat: 14
    }, {
      id: 022,
      name: 'diced onion',
      amount: 70,
      uom: 'grams',
      cal: 0.4,
      pro: 0.01,
      cab: 0.09,
      fat: 0
    }, {
      id: 023,
      name: 'jalape�o peppers, seeded and diced',
      amount: 40,
      uom: 'grams',
      cal: 0.28,
      pro: 0.009,
      cab: 0.067,
      fat: 0.003
    }, {
      id: 003,
      name: 'garlic',
      amount: 1,
      uom: 'clove',
      cal: 4,
      pro: 0.19,
      cab: 0.99,
      fat: 0.02
    }, {
      id: 024,
      name: 'mustard powder',
      amount: 1,
      uom: 'tablespoon',
      cal: 4,
      pro: 0.3,
      cab: 0.5,
      fat: 0.2
    }, {
      id: 025,
      name: 'flour',
      amount: 2,
      uom: 'tablespoon',
      cal: 28,
      pro: 1,
      cab: 6,
      fat: 0.1
    }, {
      id: 026,
      name: 'low-fat milk',
      amount: 500,
      uom: 'millilitres',
      cal: 1,
      pro: 0.03,
      cab: 0.05,
      fat: 0
    }, {
      id: 027,
      name: 'low-fat colby jack cheese',
      amount: 85,
      uom: 'grams',
      cal: 3.9,
      pro: 0.25,
      cab: 0.03,
      fat: 0.08
    }, {
      id: 028,
      name: 'low-fat cream cheese',
      amount: 20,
      uom: 'grams',
      cal: 3.4,
      pro: 0.06,
      cab: 0.04,
      fat: 0.34
    }, {
      id: 029,
      name: 'bread crumbs',
      amount: 10,
      uom: 'grams',
      cal: 3.95,
      pro: 0.13,
      cab: 0.72,
      fat: 0.05
    }],
    reviews: [{
      memberno: '3476',
      likes: 1,
      content: 'Turned out very different than I imagined'
    }, {
      memberno: '3687',
      likes: 11,
      content: 'This recipe looks fantastic. I really need to try it.'
    }]
  }, { // recipe5 
    name: 'Saut�ed Mushrooms',//weight loss, yield: 1 servings, image link: https://skinnyms.com/wp-content/uploads/2014/04/Crazy-Good-Saut%C3%A9ed-Mushrooms-with-Fresh-Herbs.jpg
    method: ' 1.Heat a large skillet over medium heat.Add the olive oil and butter.When the butter is melted, add the mushrooms.\n2.Cook the mushrooms until they are brown and fragrant, approximately 10 minutes.Season with salt and pepper, and add the garlic.Cook for 1 more minute.\n3.Add the balsamic vinegar and stir.Mix in the fresh herbs and serve.',
    duration: 15,
    ingredients: [{
      id: 030,
      name: 'sliced mushrooms',
      amount: 55,
      uom: 'grams',
      cal: 0.2,
      pro: 0.03,
      cab: 0.03,
      fat: 0
    }, {
      id: 001,
      name: 'olive oil',
      amount: 1,
      uom: 'teaspoon',
      cal: 40,
      pro: 0,
      cab: 0,
      fat: 4.5
    }, {
      id: 031,
      name: 'pure butter',
      amount: 2,
      uom: 'teaspoon',
      cal: 34,
      pro: 0,
      cab: 0,
      fat: 4
    }, {
      id: 003,
      name: 'garlic',
      amount: 1,
      uom: 'clove',
      cal: 4,
      pro: 0.19,
      cab: 0.99,
      fat: 0.02
    }, {
      id: 032,
      name: 'balsamic vinegar',
      amount: 1,
      uom: 'tablespoon',
      cal: 14,
      pro: 0.1,
      cab: 2.7,
      fat: 0
    }, {
      id: 033,
      name: 'thyme',
      amount: 1,
      uom: 'teaspoon',
      cal: 1,
      pro: 0,
      cab: 0.2,
      fat: 0
    }, {
      id: 034,
      name: 'rosemary',
      amount: 1,
      uom: 'teaspoon',
      cal: 4,
      pro: 0.06,
      cab: 0.77,
      fat: 0.18
    }],
    reviews: [{
      memberno: '6325',
      likes: 1,
      content: 'I\'ve been successful with this, a million times over, exactly as written.'
    }, {
      memberno: '8657',
      likes: 11,
      content: 'Intriguing...'
    }]
  },
  //gain muscle recipes
  { // recipe6
    name: 'Chicken breasts',//image: https://www.mensjournal.com/wp-content/uploads/mf/perfect-chicken-breast-1280.jpg?w=1000&h=563&crop=1
    method: ' 1.Preheat oven to 350�F.\n 2.Rinse and thoroughly dry chicken.\n 3.Place salt and pepper in a small dish.\n 4.Sprinkle the salt and pepper mix over the chicken to create a fine, even layer on both sides.\n 5.Heat coconut oil in a cast iron skillet over high heat.When you start to see a bit of smoke rising from the pan, remove from heat.Add chicken to hot pan and do not move from the initial spot.\n 6.Add pan back to flame and reduce to medium - high heat.Cook for 2 - 3 minutes.Check for adequate browning before flipping.Cook, uncovered, for an additional 2 - 3 minutes.\n 7.Place the entire pan into the oven to finish cooking.\n 8.Set the timer for 8 minutes then check the internal temperature to get a gauge of where you are.Once you reach 160�F, remove from oven and let sit in pan for a few minutes longer.',
    duration: 20,
    ingredients: [{
      id: 015,
      name: 'chicken breasts',
      amount: 230,
      uom: 'grams',
      cal: 1.65,
      pro: 0.31,
      cab: 0,
      fat: 0.035
    }, {
      id: 036,
      name: 'salt',
      amount: 0.5,
      uom: 'teaspoon',
      cal: 0,
      pro: 0,
      cab: 0,
      fat: 0
    }, {
      id: 037,
      name: 'ground black pepper', amount: 0.25
      , uom: 'teaspoon',
      cal: 5,
      pro: 0.23,
      cab: 1.36,
      fat: 0.07
    }, {
      id: 038
    , name: 'coconut oil',
      amount: 2,
      uom: 'tablespoon',
      cal: 117,
      pro: 0,
      cab: 0,
      fat: 14
    }],
    reviews: [{
      memberno: '4432',
      likes: 41,
      content: 'It\'s the best'
    }, {
      memberno: '9342',
      likes: 11,
      content: 'I\'ve been successful with this, a million times over, exactly as written'
    }]
  }, { // recipe7
    name: 'Chicken Sausage and Peppers',//image: https://www.mensjournal.com/wp-content/uploads/mf/chicken-sausage-peppers-1280.jpg?w=1000&h=563&crop=1
    method: ' 1.Heat oil in a large skillet; add sausage and brown on all sides.Add onions and peppers; season with salt and pepper and cook for 5 minutes over medium-high heat.Add Worcestershire and tomato sauce and cook for an additional 5 minutes or until sausage is cooked through and vegetables are tender. \n 2.Garnish with fresh basil and serve.',
    duration: 10,
    ingredients: [{
      id: 001,
      name: 'olive oil',
      amount: 1,
      uom: 'tablespoon',
      cal: 119,
      pro: 0,
      cab: 0,
      fat: 14
    }, {
      id: 039,
      name: 'chicken sausage',
      amount: 1,
      uom: 'pound',
      cal: 49,
      pro: 5,
      cab: 0.43,
      fat: 2.8
    }, {
      id: 002,
      name: 'red onion',
      amount: 114,
      uom: 'grams',
      cal: 0.4,
      pro: 0.01,
      cab: 0.09,
      fat: 0
    }, {
      id: 040,
      name: 'bell peppers',
      amount: 240,
      uom: 'grams',
      cal: 0.185,
      pro: 0.007,
      cab: 0.05,
      fat: 0
    }, {
      id: 041,
      name: 'Worcestershire sauce',
      amount: 1,
      uom: 'teaspoon',
      cal: 4,
      pro: 0,
      cab: 1,
      fat: 0
    }, {
      id: 042,
      name: 'marinara sauce',
      amount: 225,
      uom: 'grams',
      cal: 0.5,
      pro: 0.01,
      cab: 0.07,
      fat: 0.01
    }, {
      id: 009,
      name: 'basil, chopped',
      amount: 6,
      uom: 'grams',
      cal: 0,
      pro: 0,
      cab: 0,
      fat: 0
    }],
    reviews: [{
      memberno: '4342',
      likes: 1,
      content: 'This recipe looks fantastic. I really need to try it'
    }, {
      memberno: '9232',
      likes: 11,
      content: 'It\'s the best!!'
    }]
  }, { // recipe8
    name: 'BBQ Chicken Wrapped Asparagus',//image: https://www.bodybuilding.com/images/2018/may/bbq-chicken-wrapped-asparagus-header.jpg
    method: '1.Set oven to 405�F.\n2.Measure and cut chicken breasts into thin, 2-3 oz pieces.Feel free to further flatten the chicken with a mallet.\n3.Season chicken cutlets with 1 tbsp barbecue sauce(for each piece) and your choice of seasonings.\n4.Chop the ends off asparagus and wrap the chicken around 6 asparagus spears.\n5.Place the chicken on a baking sheet with the open facing down.\n6.Bake in the oven for about 8-10 minutes.',
    duration: 20,
    ingredients: [{
      id: 015,
      name: 'chicken breast',
      amount: 3,
      uom: 'ounces',
      cal: 47,
      pro: 9,
      cab: 0,
      fat: 1
    }, {
      id: 045,
      name: 'asparagus spear',
      amount: 144,
      uom: 'grams',
      cal: 3,
      pro: 0.35,
      cab: 0.62,
      fat: 0.02
    }, {
      id: 046,
      name: 'low-sodium barbecue sauce',
      amount: 2,
      uom: 'tablespoon',
      cal: 12,
      pro: 0.28,
      cab: 2,
      fat: 0.28
    }, {
      id: 047,
      name: 'cumin',
      amount: 1,
      uom: 'teaspoon',
      cal: 8,
      pro: 0.37,
      cab: 0.93,
      fat: 0.47
    }, {
      id: 048,
      name: 'paprika',
      amount: 1,
      uom: 'teaspoon',
      cal: 6,
      pro: 0.31,
      cab: 1.17,
      fat: 0.27
    }, {
      id: 049,
      name: 'garlic powder',
      amount: 1,
      uom: 'teaspoon',
      cal: 10,
      pro: 0.5,
      cab: 2.3,
      fat: 0
    }, {
      id: 050,
      name: 'ground black pepper',
      amount: 1,
      uom: 'teaspoon',
      cal: 5,
      pro: 0.23,
      cab: 1.36,
      fat: 0.07
    }, {
      id: 005,
      name: 'sliced green bell pepper',
      amount: 180,
      uom: 'grams',
      cal: 0.2,
      pro: 0.01,
      cab: 0.05,
      fat: 0
    }, {
      id: 053,
      name: 'brown rice',
      amount: 90,
      uom: 'grams',
      cal: 1.1,
      pro: 0.02,
      cab: 0.23,
      fat: 0.01
    }],
    reviews: [{
      memberno: '9734',
      likes: 1,
      content: 'Thanks for such an awesome recipe'
    }, {
      memberno: '3947',
      likes: 11,
      content: 'Intriguing...'
    }]
  }, { // recipe9
    name: 'Spicy Flank Steak Kabobs With Sweet Potato',//image: https://www.bodybuilding.com/images/2018/may/spicy-steak-kabobs-with-sweet-potato-header.jpg
    method: ' 1.Set oven to 405�F.\n 2.Wrap the sweet potato in foil and place in the oven.If you cannot find a whole sweet potato close to your serving size, then simply cut the sweet potato into small pieces, measure them to ensure your serving size portion and bake them on a baking sheet lined with aluminum foil.Bake for about 45 minutes depending on the size.If they are cut in chunks, then bake for only 25-30 minutes.\n 3.Cut flank steak into very small pieces.Season with your choice of seasonings.\n 4.Chop 1 zucchini and 1 bell pepper into small pieces for the kabob.\n 5.Assemble the kabobs, alternating between beef, bell pepper, and zucchini.\n 6.Place the assembled kabob on a baking sheet/pan and bake for 8-12 minutes depending how well you like your meat cooked.',
    duration: 10,
    ingredients: [{
      id: 054,
      name: 'flank steak',
      amount: 5,
      uom: 'ounce',
      cal: 54,
      pro: 8,
      cab: 0,
      fat: 2
    }, {
      id: 055,
      name: 'sweet potato',
      amount: 150,
      uom: 'grams',
      cal: 0.86,
      pro: 0.01,
      cab: 0.2,
      fat: 0
    }, {
      id: 056,
      name: 'zucchini',
      amount: 150,
      uom: 'grams',
      cal: 0.17,
      pro: 0.01,
      cab: 0.03,
      fat: 0.003
    }, {
      id: 005,
      name: 'green bell pepper',
      amount: 75,
      uom: 'grams',
      cal: 0.2,
      pro: 0.008,
      cab: 0.04,
      fat: 0.001
    }],
    reviews: [{
      memberno: '6483',
      likes: 1,
      content: 'Delicious!'
    }, {
      memberno: '1232',
      likes: 11,
      content: 'My new favorite snack'
    }]
  }, { // recipe10
    name: 'Turkey Meatloaf With Spinach And Whole Wheat Pearl',//image: https://www.bodybuilding.com/images/2018/may/turkey-meatloaf-with-spinach-and-whole-wheat-pearl-header.jpg
    method: ' 1.Set oven to 405�F.\n2.Season ground turkey with your choice of seasonings.Add in your choice of diced veggies.\n3.Lightly spray your muffin pan with coconut oil.Place the ground turkey inside of the muffin holders.Depending on how big your muffin pan is and your singular serving, you may have to use 2 muffin holders for each serving.\n4.Top each serving with 1 tbsp marinara sauce.\n5.Bake in the oven for about 8-10 minutes.If you use less lean ground turkey, you can consider increasing the cooking time to 10-12 minutes.\n6.Boil couscous using water and low sodium chicken or vegetable broth.Add cilantro or onions while cooking for added flavor.Set aside, and allow to cool. ',
    duration: 25,
    ingredients: [{
      id: 058,
      name: 'ground turkey breast',
      amount: 5,
      uom: 'ounces',
      cal: 29,
      pro: 4.84,
      cab: 1.19,
      fat: 0.47
    }, {
      id: 002,
      name: 'diced red onion',
      amount: 120,
      uom: 'grams',
      cal: 0.4,
      pro: 0.01,
      cab: 0.09,
      fat: 0
    }, {
      id: 060,
      name: 'marinara sauce',
      amount: 85,
      uom: 'grams',
      cal: 0.5,
      pro: 0.014,
      cab: 0.08,
      fat: 0.014
    }, {
      id: 061,
      name: 'spinach',
      amount: 30,
      uom: 'grams',
      cal: 0.2,
      pro: 0.03,
      cab: 0.04,
      fat: 0
    }, {
      id: 062,
      name: 'parsley',
      amount: 1,
      uom: 'teaspoon',
      cal: 0,
      pro: 0.03,
      cab: 0.08,
      fat: 0.01
    }, {
      id: 009,
      name: 'ground basil',
      amount: 2,
      uom: 'teaspoon',
      cal: 2,
      pro: 0.1,
      cab: 0.45,
      fat: 0.03
    }, {
      id: 064,
      name: 'garlic powder',
      amount: 1,
      uom: 'teaspoon',
      cal: 10,
      pro: 0.5,
      cab: 2.3,
      fat: 0
    }, {
      id: 065,
      name: 'onion powder',
      amount: 1,
      uom: 'teaspoon',
      cal: 8,
      pro: 0.2,
      cab: 1.9,
      fat: 0
    }, {
      id: 066,
      name: 'coriander',
      amount: 1,
      uom: 'teaspoon',
      cal: 0.25,
      pro: 0,
      cab: 0,
      fat: 0
    }, {
      id: 067,
      name: 'couscous',
      amount: 150,
      uom: 'grams',
      cal: 1.1,
      pro: 0.04,
      cab: 0.23,
      fat: 0.001
    }],
    reviews: [{
      memberno: '2797',
      likes: 1,
      content: 'Didn\'t like it..lots of jarring tastes'
    }, {
      memberno: '0843',
      likes: 11,
      content: 'It\'s the best!!'
    }]
  }];


  let mealplans = [{
    title: 'Weight loss regime',
    memberno: 1,
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
    },
    {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
      recipe_id: 32
    }]
  }];

  return {
    users: users,
    recipes: recipes,
    mealplans: mealplans
  };
};

