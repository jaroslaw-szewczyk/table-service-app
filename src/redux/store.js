import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import initialState from './initialState';
import updateTablesReducer from './updateTablesReducer';

const rootReducer = combineReducers({
  tables: updateTablesReducer, 
});

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;