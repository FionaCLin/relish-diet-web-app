import constants from "../../constants";
import {getUOM} from '../../reducers/recipe.js'
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

export const mapDispatchToProps = (dispatch, ownProps) => {
  const {id} = ownProps[0].match.params;
  console.log(id);
  dispatch(getRecipeById({uuid: id}));
  return {};
};
