import constants from '../constants/'

const initialState = {
  searchInputValue: ''
}

export default function searchInputFrom(state = initialState, action) {
  switch (action.type) {
    case constants.dashboard.SEARCH_TEXT_CHANGED:
      return {...state, searchInputValue: action.searchtext};
    case constants.SEARCH_CLICK:
      console.log(state.searchInputValue);
      // action.token = api.login(state.loginUserNameInput, state.password);
      return state;// not sure yet
    default:
      return state;
  }
}
