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

export default {
    daysOfWeek,
    macroNutrients,
    mealTimes,
    recipeList,
    PERSONAL,
    BOOKMARKED,
    RECOMMENDED,
    ADD_MEAL_PLANNER: 'ADD_MEAL_PLANNER',
    EDIT_MEAL_PLANNER: 'EDIT_MEAL_PLANNER',
}