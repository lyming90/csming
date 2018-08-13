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
            "I'm sorry, but this post does not exist.\n\nThis could be a wrong address, or perhaps the url has moved.\n\n*Or what else could it be?*"
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
