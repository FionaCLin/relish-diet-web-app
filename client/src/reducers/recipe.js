import constants from '../constants/';
import {recipeInfo} from '../constants/dummyData';
import {getRecipesById} from '../api.js';

// import {recipeInfo, users, mealPlans, ingredientList, CURR_USER_ID} from '../constants/dummyData';

const initialState = {recipeInfo};

export default function recipeList(state = initialState, action) {
  switch (action.type) {
    case constants.recipeList.SELECT_RECIPE:
      //api.get recipe detail
      // render to recipe
      break;

    case constants.dashboard.TOGGEL_LOADING:
      return {...state, loading: !state.loading};
    default:
      return state;
  }
}

// {type: constants.dashboard.SELECT_RECIPE, select_id: id}



export async function getRecipeById(dispatch, uuid) {

  console.log(uuid)
  try {
    dispatch({type: constants.recipeList.TOGGEL_LOADING});

    const {data} = await getRecipesById({recipeId: uuid});
    console.log(data)
    // dispatch({
    //   type:constants.dashboard.SET_RECIPES_LIST,
    //   recipesList: data.rows,
    // });
  } catch (err) {
  //   dispatch({type: constants.user.SHOW_ERROR, error: err.response.data || err.message});
  } finally {
    dispatch({type: constants.dashboard.TOGGEL_LOADING});
  }
}
