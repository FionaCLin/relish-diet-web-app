import constants from "../../constants";

export const mapStateToProps = (state) => {
  const [{ recipesList }] = state.dashboard
  return {
    recipesList
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    onRecipeClick(e, id) {
      dispatch({type: constants.SELECT_RECIPE, select_id: id});
    }
  };
};