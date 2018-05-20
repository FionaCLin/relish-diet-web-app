import constants from '../constants/'

const initialState = [
  {
    loginUserEmailInput: 'your email',
    password: ''
  }
]

export default function users(state = initialState, action) {
  console.log('reducer running', action);
  switch (action.type) {
    case constants.LOGIN_EMAIL_TEXT_CHANGED:
      return Object.assign({}, state, {
        loginUserEmailInput: action.emailtext
      });
    case constants.LOGIN_PWD_TEXT_CHANGED:
      return Object.assign({}, state, {
        password: action.pwdtext
      });
    case constants.LOGIN:
      return Object.assign({}, state, {
        password: '',
        token: action.token
      });
    default:
      return state;
  }
}
