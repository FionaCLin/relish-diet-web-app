import { combineReducers } from 'redux'
import user from './user';
import searchInputForm from './searchInputForm';
import dashboard from './dashboard';
import bookmarks from './bookMark';
import recipeList from './recipeList';

const rootReducer = combineReducers({
  user,
  searchInputForm,
  dashboard,
  recipeList,
  bookmarks
})

export default rootReducer
