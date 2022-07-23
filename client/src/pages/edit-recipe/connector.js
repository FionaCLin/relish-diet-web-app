import constants from '../../constants';
import {getUOM} from '../../reducers/recipe.js';

export const mapStateToProps = (state) => {
  const {recipe} = state;
  const {recipeInfo, ingredientList, UOM} = recipe;

  console.log(recipeInfo, ingredientList, UOM);

  return {
    // editRecipes: recipeInfo,'
    // modalRecipe,

    ingredientList,
    recipeInfo,
    UOM,
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  dispatch(getUOM);
  return {
    changeModal(recipe) {
      dispatch({type: constants.recipeList.REMOVE_RECIPE, recipe});
    },
    toggleDialog() {
      dispatch({type: constants.recipeList.TOGGLE_DIALOG});
    },
    deleteRecipe(recipeId) {
      console.log(recipeId);
    },
  };
};
