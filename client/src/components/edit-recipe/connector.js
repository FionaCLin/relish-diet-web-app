import constants from '../../constants';

export const mapStateToProps = (state) => {
  console.log(state);
  const {recipeList} = state;
  const {recipeInfo, ingredientList, users, CURR_USER_ID, modalRecipe} = recipeList;

  return {
    editRecipes: recipeInfo,
    ingredientList,
    recipeInfo,
    users,
    curr_user: CURR_USER_ID,
    modalRecipe,
  };
};

export const mapDispatchToProps = (dispatch) => {
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
