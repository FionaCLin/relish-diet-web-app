import {combineReducers} from 'redux';
import user from './user';
import searchInputForm from './searchInputForm';
import dashboard from './dashboard';
import bookmarks from './bookMark';
import mealList from './mealList';
import recipe from './recipe';
import recipeList from './recipeList';
import profile from './profile';

const rootReducer = combineReducers({
  user,
  profile,
  searchInputForm,
  dashboard,
  mealList,
  recipeList,
  recipe,
  bookmarks,
});

export default rootReducer;
