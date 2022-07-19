import constants from '../../constants';
import {getRecipeById} from '../../reducers/recipe.js';

export const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);

  return {
    inputValue: state.user.loginUserNameInput,
    password: state.user.password,
    error: state.user.error,
    loading: state.user.loading,
  };
};

export const mapDispatchToProps = async (dispatch, ownProps) => {
  const {id} = ownProps[0].match.params;
  console.log(id);
  await dispatch(getRecipeById({uuid: id}));
  return {};
};
