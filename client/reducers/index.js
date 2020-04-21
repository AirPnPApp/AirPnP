import { combineReducers } from 'redux';

import parkReducer from './parkReducer.js';

const reducers = combineReducers({
  // if we had other reducers, they would go here
  park: parkReducer,
});


export default reducers;
