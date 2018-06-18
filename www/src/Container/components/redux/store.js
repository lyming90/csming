import { createStore } from 'redux';

import reducer from './reducers';

// State
// {
//   pageName: [pageName],
//   content: [content],
//   redirect: [boolean]
// }

const store = createStore(reducer, {});

export default store;