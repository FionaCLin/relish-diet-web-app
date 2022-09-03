import constants from '../../constants';
import {getUOM, getIngredients} from '../../reducers/recipe.js';

export const mapStateToProps = (state) => {
  const {
    recipeInfo,
    ingredientList,
    UOM,
    ingredientsAutoCompleteList,
    recipe = {
      title: '',
      amount: 1,
      amountError: false,
      measure: 'g',
      inputIngredient: '',
      inputIngError: false,
      ingredientsProp: [],
      ingredients: [],
      images: [],
      method: '',
      previewFiles: [],
    },
  } = state.recipe;
  return {
    // editRecipes: recipeInfo,'
    // modalRecipe,
    recipe,
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
    loadRecipe: async (id) => {
      console.log(id);
      try {
        await dispatch(getRecipe);
      } catch (e) {
        console.error(e.message);
      }
    },
    loadIngredients: async (keyword, offset = 0, limit = 10) => {
      return dispatch(getIngredients(keyword, offset, limit));
    },
    deleteRecipe(recipeId) {
      console.log(recipeId);
    },
  };
};
