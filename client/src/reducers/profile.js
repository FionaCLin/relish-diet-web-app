import constants from '../constants';
import {profileUpdate} from '../api.js';

const initialState = {
  passwordOpen: false,
  password: '',
  error: '',
};

export default function profile(state = initialState, action) {
  switch (action.type) {
    case constants.user.LOGIN_PWD_TEXT_CHANGED:
      return {
        ...state,
        ...{
          password: action.pwdtext,
        },
      };
    case constants.user.PROFILE_HANDLE_CHANGE:
      state.user[action.key] = action.value;
      return {...state};
    case constants.user.PROFILE_SAVE_CHANGE:
      action.res = profileUpdate(state.profile.id, action.values);
      return state;
    case constants.user.PROFILE_DEFAULT:
      return {...state, ...action.payload};
    //
    // case constants.user.SAVE_PROFILE:
    //   console.log(state, '####???????????#', action.values);
    //   console.log({...state, ...action.values});
    // //   return {...state, ...action.profile};

    case constants.user.LOGIN_SUBMIT:
      const {profile} = action;
      const newState = {...state, profile};
      console.log(newState);
      return newState;

    default:
      return state;
  }
}
