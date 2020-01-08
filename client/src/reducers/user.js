import constants from "../constants/";
import login from "../api.js";

const initialState = {
  loginUserEmailInput: "",
  password: "",
  user: null,
  error: ""
};

export default function users(state = initialState, action) {
  // console.log('reducer running', action);
  switch (action.type) {
    case constants.login.LOGIN_EMAIL_TEXT_CHANGED:
      return Object.assign({}, state, {
        loginUserEmailInput: action.emailtext
      });
    case constants.login.LOGIN_PWD_TEXT_CHANGED:
      return Object.assign({}, state, {
        password: action.pwdtext
      });
    case constants.login.LOGIN_SUBMIT:
      action.res = login(state.loginUserEmailInput, state.password);
      return state;
    default:
      return Object.assign({}, state, action.payload);
  }
}
