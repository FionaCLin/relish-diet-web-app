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
        bookmarks: []
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


export const mealPlans = [
    {
        id: 5,
        name: 'Bodybuilding plan (PART A)',
        creator: CURR_USER_ID,
        img: [
            'images/sandwich.jpg',
            'images/recipe.jpg',
            'images/pudding.png',
            'images/meatball.jpg'
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
            Energy: 0,
            Carbs: 0,
            Protein: 0,
            Fats: 0,
            Sodium: 0
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
            Energy: 0,
            Carbs: 0,
            Protein: 0,
            Fats: 0,
            Sodium: 0
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
            Energy: 1025,
            Carbs: 32,
            Protein: 24,
            Fats: 15,
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
            "4 slices of wholemeal bread",
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
            Energy: 10,
            Carbs: 20,
            Protein: 30,
            Fats: 40,
            Sodium: 50
        },
        method: "",
        ingredients: [],
        comments: []
    },
    {
        id: 300,
        creator: 3,
        name: 'Toasted stacked foccacia sandwich',
        img: ['images/sandwich.jpg'],
        macros: {
            Energy: 10,
            Carbs: 20,
            Protein: 30,
            Fats: 40,
            Sodium: 50
        },
        method: "",
        ingredients: [],
        comments: []
    },
    {
        id: 400,
        creator: 1,
        name: 'Muscle and chives paella',
        img: ['images/paella.jpg'],
        macros: {
            Energy: 10,
            Carbs: 20,
            Protein: 30,
            Fats: 40,
            Sodium: 50
        },
        method: "",
        ingredients: [],
        comments: []
    },
    {
        id: 500,
        creator: 4,
        name: 'Banana pudding with caramel sauce',
        img: ['images/pudding.png'],
        macros: {
            Energy: 10,
            Carbs: 20,
            Protein: 30,
            Fats: 40,
            Sodium: 50
        },
        method: "",
        ingredients: [],
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
    ingredientList
}