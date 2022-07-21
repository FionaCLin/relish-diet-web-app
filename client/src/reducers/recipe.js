import constants from '../constants/';
import {recipeInfo} from '../constants/dummyData';
// import {recipeInfo, users, mealPlans, ingredientList, CURR_USER_ID} from '../constants/dummyData';
import {uom} from '../api.js';

const initialState = {recipeInfo, UOM: []};

export default function recipeList(state = initialState, action) {
  switch (action.type) {
    case constants.SELECT_RECIPE:
      //api.get recipe detail
      // render to recipe
      break;
    case 'setUOM':
      return {...state, UOM: action.uom};
    default:
      return state;
  }
}

export async function getUOM(dispatch) {
  try {
    const {data} = await uom();
    dispatch({
      type: 'setUOM',
      uom: data.map(({abbreviation}) => abbreviation),
    });
    console.log(data);
  } catch (err) {
    //dispatch({type: constants.user.SHOW_ERROR, error: err.response.data || err.message});
  } finally {
    //dispatch({type: constants.user.TOGGEL_LOADING});
  }
}
