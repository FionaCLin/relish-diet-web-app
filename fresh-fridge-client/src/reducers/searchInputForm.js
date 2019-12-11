import constants from '../constants/'
import api from '../api.js'

const initialState = [
  {
    searchInputValue: ''
  }
]

export default function searchInputFrom(state = initialState, action) {
  // console.log('reducer running', action);
  switch (action.type) {
    case constants.SEARCH_TEXT_CHANGED:
      return Object.assign({}, state, {
        searchInputValue: action.searchtext
      });
    case constants.SEARCH_CLICK:
      console.log(state.searchInputValue);
      // action.token = api.login(state.loginUserEmailInput, state.password);
      return state;// not sure yet
    default:
      return state;
  }
}
