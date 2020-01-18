import constants from "../constants";
import { profileUpdate } from "../api.js";

const initialState = {
  passwordOpen: false,
  password: "",
  error: ""
};

export default function profile(state = initialState, action) {
  // console.log('reducer running', action);
  switch (action.type) {
    case constants.user.LOGIN_PWD_TEXT_CHANGED:
      return {
        ...state,
        ...{
          password: action.pwdtext
        }
      };
    case constants.user.PROFILE_HANDLE_CHANGE:
      state.user[action.key] = action.value;
      return { ...state };
    case constants.user.PROFILE_SAVE_CHANGE:
      action.res = profileUpdate(action.user_id, action.tokenKey, action.payload);
      return state;
    case constants.user.PROFILE_DEFAULT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
