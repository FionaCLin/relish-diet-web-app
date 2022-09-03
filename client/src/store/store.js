import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '../reducers/';
import {loadState, saveState} from './presist-state-local-storage';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const persistedState = loadState();

// The store now has the ability to accept thunk functions in `dispatch`
const store = createStore(rootReducer, persistedState, composedEnhancer);
store.subscribe(() => {
  saveState({
    user: store.getState().user,
    profile: store.getState().profile,
    recipe: store.getState().recipe
  });
});
export default store;
