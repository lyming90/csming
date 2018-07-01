import flamelinkRef from "../firebase";

// const firebaseRef = firebase.database().ref();

// async: an action creator can return a(n) (async) function instead of an action object.
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
