import constants from '../constants/';

import {getRecipesByMemberId} from '../api.js';

const initialState = {
  recipesList: [],
  // recipesList: [
  //   {
  //     id: 100,
  //     name: 'Caramel Apple',
  //     image: 'apple',
  //   },
  //   {
  //     id: 100,
  //     name: 'Popeye toast with eggs',
  //     image: 'recipe',
  //   },
  //   {
  //     id: 200,
  //     name: 'Pistachio and figs cake',
  //     image: 'cake',
  //   },
  //   {
  //     id: 100,
  //     name: 'Tender salmon on bed of salad',
  //     image: 'chicken',
  //   },
  //   {
  //     id: 100,
  //     name: 'Meatball migoreng',
  //     image: 'meatball',
  //   },
  //   {
  //     id: 400,
  //     name: 'Tomato and basil pasta',
  //     image: 'paella',
  //   },
  //   {
  //     id: 100,
  //     name: 'Sunfried tomato and olives pizza',
  //     image: 'pizza',
  //   },
  //   {
  //     id: 100,
  //     name: 'Berrilicious porridge',
  //     image: 'porridge',
  //   },
  //   {
  //     id: 100,
  //     name: 'Sunfried tomato and olives pizza',
  //     image: 'protein',
  //   },
  //   {
  //     id: 300,
  //     name: 'Toasted stacked foccacia sandwich',
  //     image: 'sandwich',
  //   },
  //   {
  //     id: 100,
  //     name: 'Banana pudding with caramel sauce',
  //     image: 'soup',
  //   },
  //   {
  //     id: 500,
  //     name: 'Banana pudding with caramel sauce',
  //     image: 'pudding',
  //   },
  // ],
  loading: false,
};

export default function dashboard(state = initialState, action) {
  switch (action.type) {
    case constants.dashboard.SELECT_RECIPE:
      return {...state, recipesList: action.recipesList};
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
