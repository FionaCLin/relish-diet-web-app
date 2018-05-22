import { combineReducers } from 'redux'
import users from './user';
import searchInputForm from './searchInputForm';
import dashboard from './dashboard';
import bookmarks from './bookMark';

const rootReducer = combineReducers({
  users,
  searchInputForm,
  dashboard,
  bookmarks
})

export default rootReducer
