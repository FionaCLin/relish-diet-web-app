import constants from '../../constants';
import {signIn} from '../../reducers/user.js';

export const mapStateToProps = (state) => {
  return {
    inputValue: state.user.loginUserNameInput,
    password: state.user.password,
    error: state.user.error,
    loading: state.user.loading,
  };
};

export const mapDispatchToProps = (dispatch) => {
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
    onClickLogin: async (navigate) => {
      try {
        await dispatch(signIn);
        navigate('/dashboard');
      } catch (e) {
        console.error(e.message);
      }
    },
  };
};
