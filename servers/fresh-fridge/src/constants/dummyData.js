export const CURR_USER_ID = 1;

export const users = [
    {
        id: 1,
        email: "loreen@gmail.com",
        username: 'Loreen',
        password: 'password',
        goals: [0, 1, 3],
        height: 140,
        weight: 52,
        bookmarks: [200]
    },
    {
        id: 2,
        email: "",
        username: 'MarySue',
        password: 'password',
        goals: [],
        height: null,
        weight: null,
        bookmarks: []
    },
    {
        id: 3,
        email: "",
        username: 'AdamJones',
        password: 'password',
        goals: [],
        height: null,
        weight: null,
        bookmarks: []
    },
    {
        id: 4,
        email: "",
        username: 'CuriousGeorge',
        password: 'password',
        goals: [],
        height: null,
        weight: null,
        bookmarks: []
    }
];


export const sortDiet = [
    [300, 14, NaN, NaN, NaN],
    [1000, 1000, 1000, 1000, 1000],
    [600, 16, NaN, 26, NaN],
    [700, 45, NaN, NaN, NaN],
    [500, NaN, NaN, NaN, NaN]
];

export const sortPlan = [
    [10090, 1209 , 120, 45, 90],
    [19000, 1030, 100, 1000, 100],
    [9300, 1656, 800, 246, 38],
    [700, 4523, 102, 234, 89],
    [12100, 904 , 120, 45, 90]
];

export const mealPlans = [
    {
        id: 5,
        name: 'Bodybuilding plan (PART A)',
        creator: CURR_USER_ID,
        img: [
            'images/cake.jpg',
            'images/recipe.jpg',
            'images/pudding.png',
            'images/paella.jpg'
        ],
        dailyMeals : [
            [null, null, null],
            [100, null, 400],
            [null, 200, null],
            [null, 200, null],
            [400, null, 500],
            [null, null, null],
            [null, null, 100]
        ],
        macros: {
            Energy: 4392,
            Carbs: 378,
            Protein: 147,
            Fats: 109,
            Sodium: 9
        }
    },
    {
        id: 6,
        name: 'Bodybuilding plan (PART B)',
        creator: CURR_USER_ID,
        img: [
            'images/sandwich.jpg',
            'images/recipe.jpg',
            'images/pudding.png',
            'images/meatball.jpg'
        ],
        dailyMeals : [
            [500, null, 500],
            [400, null, 400],
            [200, 200, null],
            [null, 200, null],
            [400, null, 500],
            [100, null, null],
            [null, null, 100]
        ],
        macros: {
            Energy: 6298,
            Carbs: 566,
            Protein: 212,
            Fats: 168,
            Sodium: 13
        }
    }
];

export const recipeInfo = [
    {
        id: 100,
        creator: 1,
        name: 'Popeye toast with eggs',
        img: ['images/recipe.jpg', 'images/recipe2.png', 'images/recipe3.jpg'],
        macros: {
            Energy: 620,
            Carbs: 40,
            Protein: 16,
            Fats: 12,
            Sodium: 2
        },
        method: "Preheat the grill to high.\n" + 
                "Lay the tomato vines in a large baking tray, prick each tomato with the tip of a sharp knife" +
                " and grill for 4 minutes, then add the bread to the tray to toast on both sides.\n" +
                "Meanwhile, crack 1 egg into a blender, add the ham, spinach, a good pinch of black pepper and the milk and blitz until smooth.\n" + 
                "Take the tray from under the grill and divide the green eggy mixture between" +
                "the four pieces of toast, spreading it right out to the edges.\n" +
                "Dry fry the remaining 2 eggs in a non-stick frying pan on a medium heat, covering the pan with" +
                " a lid to steam and coddle the eggs on the top – cook to your liking.",
        ingredients: [
            "160 g of cherry tomatoes",
            "4 of wholemeal bread",
            "3 large eggs",
            "80 g of baby spinach"
        ],
        comments: [
            {
                commentor: 2,
                message: "Was a great meal, but my husband found it a little bit salty.",
                rating: 3
            },
            {
                commentor: 3,
                message: "Really good after doing a mid-morning workout!",
                rating: 4
            },
            {
                commentor: 4,
                message: "A bit strange for my tastes",
                rating: 2
            }
        ]
    },
    {
        id: 200,
        creator: 2,
        name: 'Pistachio and figs cake',
        img: ['images/cake.jpg'],
        macros: {
            Energy: 790,
            Carbs: 63,
            Protein: 12,
            Fats: 15,
            Sodium: 1
        },
        method: "Preheat oven to 180 degrees C. Grease and flour a 23cm x 23cm cake pan or line a muffin pan with paper liners.\n" + 
                "In a medium bowl, cream together the sugar and butter.Beat in the eggs, one at a time, then stir in the vanilla essence.\n" +
                "Combine flour and baking powder, add to the creamed mixture and mix well.Finally stir in the milk until mixture is smooth.Pour or spoon into the prepared pan.\n" +
                "Bake in preheated oven for 30 to 40 minutes.For cupcakes, bake 20 to 25 minutes.Cake is done when it springs back to the touch.",
        ingredients: [
            "100 g of flour",
            "50 g of pistachio",
            "2 of fig",
            "3 of egg",
            "90 g of raw sugar"
        ],
        comments: []
    },
    {
        id: 300,
        creator: 3,
        name: 'Toasted stacked foccacia sandwich',
        img: ['images/sandwich.jpg'],
        macros: {
            Energy: 645,
            Carbs: 52,
            Protein: 7,
            Fats: 16,
            Sodium: 4
        },
        method: "For the pickles, toss all the ingredients together in a plastic container with 1 teaspoon sea salt and some freshly ground black pepper. Cover and refrigerate for at least 2 hours or overnight\n" +
        "Place chicken in a shallow ceramic dish and cover with the buttermilk.Marinate in the fridge for at least 2 hours or overnight.\n" +
        "Half - fill a saucepan with oil and heat to 190C(if you don’t have a kitchen thermometer, a cube of bread will turn golden in 30 seconds)." +
        "Combine flour and cayenne pepper in a bowl and season with salt.Remove chicken from the buttermilk, allowing the excess to drip off, then coat in the flour mixture, shaking off excess.For the pickles, toss all the ingredients together in a plastic container with 1 teaspoon sea salt and some freshly ground black pepper. Cover and refrigerate for at least 2 hours or overnight.\n" +
        "Place chicken in a shallow ceramic dish and cover with the buttermilk. Marinate in the fridge for at least 2 hours or overnight.\n" +
        "Half-fill a saucepan with oil and heat to 190C (if you don’t have a kitchen thermometer, a cube of bread will turn golden in 30 seconds).\n" +
        "Combine flour and cayenne pepper in a bowl and season with salt. Remove chicken from the buttermilk, allowing the excess to drip off, then coat in the flour mixture, shaking off excess.",
        ingredients: [
            "1 of wholemeal bread",
            "100 g of butter",
            "2 of garlic",
            "2 of tomatoes"
        ],
        comments: []
    },
    {
        id: 400,
        creator: 1,
        name: 'Muscles and chives paella',
        img: ['images/paella.jpg'],
        macros: {
            Energy: 676,
            Carbs: 73,
            Protein: 43,
            Fats: 22,
            Sodium: 1
        },
        method: "Heat a large heavy-based frying pan over medium-high heat. Add sausage. Cook for 4 minutes, turning, or until browned. Remove to a plate. Cut into 1cm-thick slices.\n" +
        "Reduce heat to medium.Add oil and chicken to frying pan.Cook for 2 to 3 minutes each side or until golden.Add onion, garlic and capsicum.Cook, stirring, for 2 to 3 minutes or until soft.\n" +
        "Add turmeric, cumin, rice, tomatoes and stock to frying pan.Stir until well combined.Bring to the boil.Reduce heat to low.Cover.Simmer for 15 minutes, stirring occasionally, or until rice is tender.\n" +
        "Remove lid.Stir through peas and sausage.Cook for a further 1 to 2 minutes or until heated through.Sprinkle with parsley.Serve.",
        ingredients: [
            "1000 g of muscles",
            "2 g of chives",
            "500 g of chicken",
            "1 tbsp of olive oil"
        ],
        comments: []
    },
    {
        id: 500,
        creator: 4,
        name: 'Banana pudding with caramel sauce',
        img: ['images/pudding.png'],
        macros: {
            Energy: 220,
            Carbs: 26,
            Protein: 5,
            Fats: 11,
            Sodium: 1
        },
        method: "In 2-quart saucepan, mix sugar, cornstarch and salt. Gradually stir in milk. Cook over medium heat, stirring constantly, until mixture thickens and boils. Boil and stir 1 minute.\n" +
        "Gradually stir at least half of the hot mixture into egg yolks, then stir back into hot mixture in saucepan.Boil and stir 1 minute; remove from heat.Stir in butter and vanilla.\n" +
        "Pour pudding into dessert dishes.Cover and refrigerate about 1 hour or until chilled.Store covered in refrigerator.",
        ingredients: [
            "1 tbsp of salt",
            "2 tbsp of vanilla",
            "2 tbsp of butter",
            "300 mL of milk",
            "200 g of sugar"
        ],
        comments: []
    }
  ];

export const ingredientList = [
    'apple',
    'appam',
    'aperol',
    'aprium',
    'apricot',
    'appadam',
    'applepear',
    'appletini',
    'applejacks',
    'applejuice',
    'applesauce',
    'applebutter',
    'salt',
    'sake',
    'shake',
    'sauce',
    'salsa',
    'scone',
    'samosa',
    'salade',
    'salmon',
    'salami',
    'sub',
    'suet',
    'sushi',
    'sugar',
    'sumac',
    'sundae',
    'subway',
    'supper',
    'sunfish',
    'sunchip',
    'raw sugar',
    'sugar peas',
    'palm sugar',
    'sugar cube',
    'cane sugar',
    'white sugar',
    'maple sugar',
    'brown sugar',
    'icing sugar',
    'fig',
    'feta',
    'fish',
    'flan',
    'flax',
    'fries',
    'flour',
    'filet',
    'farro',
    'fanta',
    'flips',
    'flauta',
    'flagel',
    'flapjack',
    'flatbread',
    'flageolet',
    'flounder',
    'rye flour',
    'flognarde',
    'florentine',
    'rice flour',
    'bread flour',
    'spelt flour',
    'white flour',
    'almond flour',
    'soy flour',
    'egg',
    'evoo',
    'eggo',
    'equal',
    'ensure',
    'eggnog',
    'edamame',
    'eggnog',
    'eggroll',
    'eggbake',
    'eggplant',
    'eggwhite',
    'eggbeater',
    'dove eggs'
]

export default {
    recipeInfo,
    users,
    mealPlans,
    ingredientList,
    sortDiet,
    sortPlan
}
