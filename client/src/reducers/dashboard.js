import constants from '../constants/';

import {getRecipesByMemberId} from '../api.js';
import {getRecipesByKeyword} from '../api.js';

const initialState = {
  recipesList: [],
  loading: false,
};

export default function dashboard(state = initialState, action) {
  switch (action.type) {
    case constants.dashboard.SET_RECIPES_LIST:
      return {...state, recipesList: action.recipesList};

    case constants.dashboard.TOGGEL_LOADING:
      return {...state, loading: !state.loading};
    default:
      return state;
  }
}


export async function getDashboardRecipes(dispatch, getState) {
  const {profile:{id:uuid}} = getState().user;
  let response;
  try {
    dispatch({type: constants.dashboard.TOGGEL_LOADING});

    const {data} = await getRecipesByMemberId({memberId: uuid});
    dispatch({
      type:constants.dashboard.SET_RECIPES_LIST,
      recipesList: data.rows,
    });
  } catch (err) {
  //   dispatch({type: constants.user.SHOW_ERROR, error: err.response.data || err.message});
  } finally {
    dispatch({type: constants.dashboard.TOGGEL_LOADING});
  }
}

export async function getDashboardRecipesByKeword(dispatch, getState) {
  const {searchInputValue} = getState().searchInputForm;
  let response;
  try {
    dispatch({type: constants.dashboard.TOGGEL_LOADING});

    const {data} = await getRecipesByKeyword({keyword: searchInputValue});
    dispatch({
      type:constants.dashboard.SET_RECIPES_LIST,
      recipesList: data.rows,
    });
  } catch (err) {
  //   dispatch({type: constants.user.SHOW_ERROR, error: err.response.data || err.message});
  } finally {
    dispatch({type: constants.dashboard.TOGGEL_LOADING});
  }
}
