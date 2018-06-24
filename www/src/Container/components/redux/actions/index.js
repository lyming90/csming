import firebase from "../firebase";

const firebaseRef = firebase.database().ref();

// async: an action creator can return a(n) (async) function instead of an action object.
export const fetchPostList = () => 
  async dispatch => {
    const databaseRef = firebaseRef.child('posts').child('ref');
    databaseRef.on('value', snapshot => {
      dispatch({
        type: 'FETCH_POST_LIST',
        payload: snapshot.val()
      });
    });
  };

export const fetchPostPreview = () =>
  async dispatch => {
    const databaseRef = firebaseRef.child('posts').child('preview');
    databaseRef.on('value', snapshot => {
      dispatch({
        type: 'FETCH_POST_PREVIEW',
        payload: snapshot.val()
      });
    });
  };

export const fetchPostContent = (alias) => 
  async dispatch => {
    console.log("Fetching...");
    const databaseRef = firebaseRef.child('posts').child('content').child(alias);
    databaseRef.once('value', snapshot => {
      dispatch({
        type: 'FETCH_POST_CONTENT',
        payload: snapshot.val()
      });
    });
  };

export const clearState = () => ({
  type: 'CLEAR_STATE',
});