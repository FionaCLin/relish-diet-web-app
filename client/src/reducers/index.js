import { combineReducers } from 'redux'
import user from './user';
import searchInputForm from './searchInputForm';
import dashboard from './dashboard';
import bookmarks from './bookMark';
import recipeList from './recipeList';
import profile from './profile';

const rootReducer = combineReducers({
  user,
  profile,
  searchInputForm,
  dashboard,
  recipeList,
  bookmarks
})

export default rootReducer
