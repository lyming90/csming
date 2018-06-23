import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'
import reducer from './reducers/index';

// State
// {
//   postList: string[],
//   postContent: string,
// }

const initialState = {
  postList: '',
  postContent: '',
  postPreview: {},
}

const store = createStore(reducer, initialState, applyMiddleware(reduxThunk));

export default store;