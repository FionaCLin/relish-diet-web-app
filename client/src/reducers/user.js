import constants from "../constants/";
import {login, signup} from "../api.js";

const initialState = {
  passwordOpen: false,
  loginUserNameInput: "",
  password: "",
  user: null,
  error: "",
  loading: false
};

export default function users(state = initialState, action) {

  switch (action.type) {
  case constants.user.LOGIN_EMAIL_TEXT_CHANGED:
    return {
      ...state,
      ...{
        loginUserNameInput: action.emailtext
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
      action.res = login({email: state.loginUserNameInput, password: state.password});
      return {
        ...state,
        ...{
          error: ``
        }
      };
    }
  case constants.user.LOGIN_SUBMIT:
    const {username, attributes: {email, family_name, given_name}} = action.user;

    const user = {
      givenname: given_name,
      familyname: family_name,
      email,
      username
    }

    return {...state, user}

  case constants.user.SIGNUP_SUBMIT:
    action.res = signup(state.loginUserNameInput, state.password);
    return state;
  case constants.user.SHOW_ERROR:

    return {...state, error: action.error}
  case constants.user.TOGGEL_LOADING:
    return {...state, loading: !state.loading}
  default:
    return state;
  }
}

export async function signIn(dispatch, getState) {
  const {loginUserNameInput = '', password = ''} = getState().user;
  let response;
  try {

    dispatch({type: constants.user.TOGGEL_LOADING})

    response = await login({username: loginUserNameInput, password})

    dispatch({type: constants.user.LOGIN_SUBMIT, user: response.data.user, error: ''})
    return response
  } catch (err) {
    dispatch({type: constants.user.SHOW_ERROR, error: err.response.data || err.message})

  } finally {
    dispatch({type: constants.user.TOGGEL_LOADING})
  }

}