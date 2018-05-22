import { combineReducers } from 'redux'
import users from './user';
import searchInputForm from './searchInputForm';
import dashboard from './dashboard';

const rootReducer = combineReducers({
  users,
  searchInputForm,
  dashboard
})

export default rootReducer
