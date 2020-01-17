import constants from "../constants/";
import { login, signup } from "../api.js";

const initialState = {
  loginUserEmailInput: "",
  password: "",
  user: null,
  error: ""
};

export default function users(state = initialState, action) {
  // console.log('reducer running', action);
  switch (action.type) {
    case constants.user.LOGIN_EMAIL_TEXT_CHANGED:
      return {
        ...state,
        ...{
          loginUserEmailInput: action.emailtext
        }
      };
    case constants.user.LOGIN_PWD_TEXT_CHANGED:
      return {
        ...state,
        ...{
          password: action.pwdtext
        }
      };
    case constants.user.LOGIN_PWD_CONFIRM:
      if (action.pwdtext !== state.password) {
        return {
          ...state,
          ...{
            error: `* password does not match`
          }
        };
      } else {
        action.res = login(state.loginUserEmailInput, state.password);
        return {
          ...state,
          ...{
            error: ``
          }
        };
      }
    case constants.user.LOGIN_SUBMIT:
      action.res = login(state.loginUserEmailInput, state.password);
      return state;
    case constants.user.SIGNUP_SUBMIT:
      action.res = signup(state.loginUserEmailInput, state.password);
      return state;
    default:
      return { ...state, ...action.payload };
  }
}
