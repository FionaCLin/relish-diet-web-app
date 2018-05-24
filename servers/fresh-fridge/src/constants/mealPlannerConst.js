const PERSONAL =  'PERSONAL';
const BOOKMARKED = 'BOOKMARKED';
const RECOMMENDED = 'RECOMMENDED';
const daysOfWeek = ['\xa0\xa0\xa0', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
const macroNutrients = ['Intake', 'Carbs', 'Protein', 'Fats', 'Sodium'];
const mealTimes = ['BREKKIE', '\xa0LUNCH', 'DINNER'];
const recipeList = [
    {
        recipes: PERSONAL,
        title: "Personal Recipes",
        class: "glyphicon glyphicon-pencil"
    },
    {
        recipes: BOOKMARKED,
        title: "Bookmarked Recipes",
        class: "glyphicon glyphicon-bookmark"
    },
    {
        recipes: RECOMMENDED,
        title: "Recommended Recipes",
        class: "glyphicon glyphicon-thumbs-up"
    }
];
const defaultPlan = {
    name: "",
    dailyMeals : [
        [null, null, null],
        [null, null, null],
        [null, null, null],
        [null, null, null],
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ],
    macros: {
        Intake: 0,
        Carbs: 0,
        Protein: 0,
        Fats: 0,
        Sodium: 0
    }
};

export default {
    daysOfWeek,
    macroNutrients,
    mealTimes,
    recipeList,
    PERSONAL,
    BOOKMARKED,
    RECOMMENDED,
    defaultPlan,
    ADD_MEAL_PLANNER: 'add',
    EDIT_MEAL_PLANNER: 'edit',
    VIEW_MEAL_PLANNER: 'view'
}