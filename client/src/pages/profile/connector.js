import constants from '../../constants';

export const mapStateToProps = (state) => {
  console.log(state, '##########');
  return {
    ...state.user,
    ...state.profile.profile,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    onSaveProfile(values) {
      console.log(constants, values);
      dispatch({type: constants.user.PROFILE_SAVE_CHANGE, values});
    },
  };
};
