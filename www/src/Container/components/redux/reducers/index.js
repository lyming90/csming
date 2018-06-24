// import pageReducer from './pageReducer';
// import contentReducer from './contentReducer';
// import { combineReducers } from 'redux';

// const rootReducer = combineReducers({
//   pageReducer,
//   contentReducer,
// });

// export default rootReducer;

const reducer = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_POST_LIST':
      // console.log('fetching post list', Object.keys(action.payload));
      return {
        ...state,
        postList: action.payload,
      };
    case 'FETCH_POST_PREVIEW':
      return {
        ...state,
        postPreview: action.payload,
      };
    case 'FETCH_POST_CONTENT':
      return {
        ...state,
        postContent: action.payload,
      };
    case 'CLEAR_STATE':
      return {
        ...state,
        postList: '',
        postPreview: [],
        postContent: '',
      }
    default:
      return state;
  }
};

export default reducer;