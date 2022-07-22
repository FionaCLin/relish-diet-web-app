import constants from '../../constants';
export const mapStateToProps = (state) => {
  console.log(state);
  const {recipeList} = state;
  const {recipeInfo, list_type, users, CURR_USER_ID, showDialog, modalRecipe} = recipeList;

  return {
    showDialog,
    recipeInfo,
    recipes: recipeInfo
      .filter((recipe) => recipe.creator === CURR_USER_ID)
      .map((recipe) => ({
        ...recipe,
        creatorName: users.find((x) => x.id === recipe.creator).username,
      })),
    list_type,
    pageTitle: 'My Recipes',
    users,
    curr_user: CURR_USER_ID,
    modalRecipe,
  };
};

export const mapDispatchToProps = async (dispatch) => {
  //await dispatch(getDashboardRecipes);
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
