import flamelink from "flamelink";

const firebaseConfig = {
  apiKey: "AIzaSyAQHHRSOyGX0D8B0V3cNyEawH-9wUFIRv4",
  authDomain: "csming-bce10.firebaseapp.com",
  databaseURL: "https://csming-bce10.firebaseio.com",
  projectId: "csming-bce10",
  storageBucket: "csming-bce10.appspot.com",
  messagingSenderId: "1077104744428"
};

const flamelinkRef = flamelink(firebaseConfig);

export const fetchPostList = () => async dispatch => {
  flamelinkRef.content
    .get("posts", {
      fields: ["id", "title", "preview", "status", "postDate"]
    })
    .then(response => {
      dispatch({
        type: "FETCH_POST_LIST.SUCCESS",
        payload: response
      });
    })
    .catch(error => {
      dispatch({
        type: "FETCH_POST_LIST.FAILURE",
        payload: error
      });
    });
};

export const fetchPostContent = id => async dispatch => {
  flamelinkRef.content
    .getByField("posts", "id", id)
    .then(response => {
      dispatch({
        type: "FETCH_POST_CONTENT.SUCCESS",
        payload: response[id]
      });
    })
    .catch(error => {
      dispatch({
        type: "FETCH_POST_CONTENT.FAILURE",
        payload: error
      });
    });
};

export const clearPostContent = () => dispatch => {
  dispatch({
    type: "CLEAR_POST_CONTENT"
  });
};

export const clearPostList = () => dispatch => {
  dispatch({
    type: "CLEAR_POST_LIST"
  });
};
