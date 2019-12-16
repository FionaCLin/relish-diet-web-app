import constants from "../constants/";
import login from "../api.js";

const initialState = [
  {
    loginUserEmailInput: "",
    password: "",
    logged: false
  }
];

export default function users(state = initialState, action) {
  // console.log('reducer running', action);
  switch (action.type) {
    case constants.login.LOGIN_EMAIL_TEXT_CHANGED:
      console.log("111", state.loginUserEmailInput, state.password);

      return Object.assign({}, state, {
        loginUserEmailInput: action.emailtext
      });
    case constants.login.LOGIN_PWD_TEXT_CHANGED:
      console.log("111", state.loginUserEmailInput, state.password);

      return Object.assign({}, state, {
        password: action.pwdtext
      });
    case constants.login.LOGIN_SUBMIT:
      console.log("111", state.loginUserEmailInput, state.password);
      action.token = login(state.loginUserEmailInput, state.password);
      return Object.assign({}, state, {
        logged: true
      });
    default:
      return state;
  }
}
