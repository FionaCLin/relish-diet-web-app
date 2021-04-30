import constants from '../constants/';
import {recipeInfo} from '../constants/dummyData';
// import {recipeInfo, users, mealPlans, ingredientList, CURR_USER_ID} from '../constants/dummyData';

const initialState = {recipeInfo};

export default function recipeList(state = initialState, action) {
  switch (action.type) {
    case constants.SELECT_RECIPE:
      //api.get recipe detail
      // render to recipe
      break;
    default:
      return state;
  }
}
