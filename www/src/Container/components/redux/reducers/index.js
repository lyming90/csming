import pageReducer from './pageReducer';
import contentReducer from './contentReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  pageReducer,
  contentReducer,
});

export default rootReducer;