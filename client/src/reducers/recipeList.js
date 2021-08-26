import constants from '../constants/';
import {recipeInfo, users, ingredientList, CURR_USER_ID} from '../constants/dummyData';

const initialState = {
  recipeInfo,
  list_type: constants.recipeList.RECIPE_LIST,
  users,
  ingredientList,
  CURR_USER_ID,
  showDialog: false,
  modalRecipe: null,
};
// const initialState = [
//   {
//     myrecipes: [{
//       id: 1,
//       name: 'Caramel Apple',
//       image: 'apple'
//     }, {
//       id: 2,
//       name: 'Popeye toast with eggs',
//       image: 'recipe'
//     }, {
//       id: 3,
//       name: 'Pistachio and figs cake',
//       image: 'cake'
//     }, {
//       id: 4,
//       name: 'Tender salmon on bed of salad',
//       image: 'chicken'
//     }]
//   }
// ]

export default function recipeList(state = initialState, action) {
  switch (action.type) {
    case constants.SELECT_RECIPE:
      //api.get recipe detail
      // render to recipe
      break;
    case constants.recipeList.TOGGLE_DIALOG:
      return {...state, showDialog: !state.showDialog};
    case constants.recipeList.REMOVE_RECIPE:
      console.log('###', state, {...state, modalRecipe: action.recipe, showDialog: true});
      return {...state, modalRecipe: action.recipe, showDialog: true};
    default:
      return state;
  }
}
