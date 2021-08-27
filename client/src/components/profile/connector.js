import constants from "../../constants";

export const mapStateToProps = (state) => {

  return {
    ...state.users
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    onRecipeClick(e, id) {
      dispatch({type: constants.SELECT_RECIPE, select_id: id});
    }
  };
};