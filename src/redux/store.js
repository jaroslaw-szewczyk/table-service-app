import { createStore, combineReducers } from 'redux';
import initialStore from './initialStore';

const subreducers = {
  
}

const reducer = combineReducers(subreducers);


const store = createStore(
  reducer,
  initialStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;