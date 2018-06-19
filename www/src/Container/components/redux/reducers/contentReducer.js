const contentReducer = (state = [], action) => {
  console.log("Passed to reducer!");
  switch(action.type) {
    case 'FETCH_POST_LIST':
      // console.log('fetching post list', Object.keys(action.payload));
      return {
        ...state,
        postList: Object.keys(action.payload),
        doneFetch: true
      }
    case 'FETCH_POST_CONTENT':
      console.log('Fetching post content', action);
      return {
        ...state,
        postContent: {
          ...state.postContent,
          [action.alias]: {
            title: action.payload.title,
            content: action.payload.content,
            doneFetch: true
          }
        }
      }
    default:
      return state;
  }
};

export default contentReducer;