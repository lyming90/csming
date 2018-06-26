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
    case 'FETCH_POST_LIST.SUCCESS':
      return {
        ...state,
        postList: action.payload,
      };
    case 'FETCH_POST_LIST.FAILURE':
      return {
        state,  // TODO
      };
    case 'FETCH_POST_CONTENT.SUCCESS':
      return {
        ...state,
        postContent: action.payload,
      };
    case 'FETCH_POST_CONTENT.FAILURE':
      return {
        ...state,  // TODO
      };
    case 'CLEAR_POST_LIST':
      return {
        ...state,
        postList: null,
      };
    case 'CLEAR_POST_CONTENT':
      return {
        ...state,
        postContent: null,
      }
    default:
      return state;
  }
};

export default reducer;