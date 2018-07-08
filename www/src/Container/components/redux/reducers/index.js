// import pageReducer from './pageReducer';
// import contentReducer from './contentReducer';
// import { combineReducers } from 'redux';

// const rootReducer = combineReducers({
//   pageReducer,
//   contentReducer,
// });

// export default rootReducer;

const reducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_POST_LIST.SUCCESS":
      return {
        ...state,
        postList: action.payload
      };
    case "FETCH_POST_LIST.FAILURE":
      return {
        ...state,
        postList: action.payload // TODO: error message
      };
    case "FETCH_POST_CONTENT.SUCCESS":
      return {
        ...state,
        postContent: action.payload
      };
    case "FETCH_POST_CONTENT.FAILURE":
      return {
        ...state,
        postContent: {
          title: "404 Not Found",
          content:
            "I'm sorry, but this post does not exist. :(\n\nPerhaps this is a wrong address."
        }
      };
    case "CLEAR_POST_LIST":
      return {
        ...state,
        postList: null
      };
    case "CLEAR_POST_CONTENT":
      return {
        ...state,
        postContent: null
      };
    default:
      return state;
  }
};

export default reducer;
