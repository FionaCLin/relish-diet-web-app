import constants from '../constants/';
import {recipeInfo} from '../constants/dummyData';
import {getRecipesById} from '../api.js';

// import {recipeInfo, users, mealPlans, ingredientList, CURR_USER_ID} from '../constants/dummyData';
import {uom} from '../api.js';

const initialState = {
  recipeInfo,
  UOM: [],
  selectedRecipe: null,
  error: null,
  loading: false,
};

export default function recipeList(state = initialState, action) {
  switch (action.type) {
    case constants.recipeList.SELECT_RECIPE:
      const {recipe} = action;
      return {...state, selectedRecipe: recipe, loading: false};
    case 'setUOM':
      return {...state, UOM: action.uom};

    case constants.recipe.TOGGEL_LOADING:
      console.log(state);
      console.log({...state, loading: !state.loading});
      return {...state, loading: !state.loading};
    default:
      return state;
  }
}

export async function getUOM(dispatch, getState) {
  const {UOM} = getState().recipe;
  if (UOM.length > 0) {
    return;
  }
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
// {type: constants.dashboard.SELECT_RECIPE, select_id: id}

export const getRecipeById = (uuid) => async (dispatch) => {
  try {
    dispatch({type: constants.recipe.TOGGEL_LOADING});

    const response = await getRecipesById({recipeId: uuid});
    dispatch({
      type: constants.recipeList.SELECT_RECIPE,
      recipe: response.data,
    });
    return response;
  } catch (err) {
    dispatch({type: constants.recipeList.SHOW_ERROR, error: err.response.data || err.message});
  }
};
