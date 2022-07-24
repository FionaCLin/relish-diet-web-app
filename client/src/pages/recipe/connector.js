import constants from '../../constants';
import {getUOM} from '../../reducers/recipe.js';

export const mapStateToProps = (state) => {
  return {
    inputValue: state.user.loginUserNameInput,
    password: state.user.password,
    error: state.user.error,
    loading: state.user.loading,
  };
};

export const mapDispatchToProps = (dispatch) => {
  dispatch(getUOM);
  return {
    handleEmailChange: (e) => {
      dispatch({
        type: constants.user.LOGIN_EMAIL_TEXT_CHANGED,
        emailtext: e.target.value,
      });
    },
    handlePwdChange: (e) => {
      dispatch({
        type: constants.user.LOGIN_PWD_TEXT_CHANGED,
        pwdtext: e.target.value,
      });
    },
    /* onClickLogin: async (push) => {
      try {
        const {status = null} = await dispatch(signIn)
        if (status === 200) {
          push('/dashboard');
        }
      } catch (e) {
        console.error(e.message)
      }
    } */
  };
};
