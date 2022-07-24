import constants from '../../constants';
import {getUOM} from '../../reducers/recipe.js';

export const mapStateToProps = (state) => {
  // const {recipe} = state;
  const {
    recipeInfo,
    ingredientList,
    UOM,
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
  } = state;

  console.log(recipeInfo, ingredientList, UOM);

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
      console.log(id)
      try {
        await dispatch(getRecipe);
      } catch (e) {
        console.error(e.message);
      }
    },
    deleteRecipe(recipeId) {
      console.log(recipeId);
    },
  };
};
