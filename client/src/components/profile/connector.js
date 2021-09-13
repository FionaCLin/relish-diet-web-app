import constants from '../../constants';

export const mapStateToProps = (state) => {
  console.log(state.profile, '##########');
  return {
    ...state.user,
    ...state.profile.profile,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    onRecipeClick(e, id) {
      dispatch({type: constants.SELECT_RECIPE, select_id: id});
    },
  };
};
