import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'

import reducer from './reducers';

// State
// {
//   pageName: [pageName],
//   postList: string[],
//   doneFetch: boolean,
//   content: [content],
//   redirect: [boolean]
// }

const store = createStore(reducer, {}, applyMiddleware(reduxThunk));

export default store;