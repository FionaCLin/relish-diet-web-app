import constants from '../../constants';

export const mapStateToProps = (state) => {
  console.log(state);
  const {bookmarks} = state;
  const {recipeInfo, list_type, users, CURR_USER_ID, showDialog, modalRecipe} = bookmarks;

  const {bookmarks: bookMarks} = users.find((x) => x.id === CURR_USER_ID);

  return {
    showDialog,
    recipeInfo,
    recipes: recipeInfo
      .filter((recipe) => bookMarks.includes(recipe.id))
      .map((recipe) => ({
        ...recipe,
        creatorName: users.find((x) => x.id === recipe.creator).username,
      })),
    list_type,
    pageTitle: "Bookmarked Recipes",
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
