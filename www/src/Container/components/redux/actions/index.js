import firebase from "../firebase";

const firebaseRef = firebase.database().ref();

export const switchPage = (pageName) => ({
  type: 'SWITCH_PAGE',
  payload: {
    pageName: pageName
  }
});

export const triggerRedirection = () => ({
  type: 'TRIGGER_REDIRECTION',
});

// async: an action creator can return a(n) (async) function instead of an action object.
export const fetchPostList = () => 
  async dispatch => {
    const databaseRef = firebaseRef.child('posts');
    databaseRef.once('value', snapshot => {
      dispatch({
        type: 'FETCH_POST_LIST',
        payload: snapshot.val()
      });
    });
  };

export const fetchPostContent = (postAlias) => 
  async dispatch => {
    const databaseRef = firebaseRef.child('posts').child(postAlias);
    databaseRef.once('value', snapshot => {
      const postData = snapshot.val();
      console.log("postData??", postData);
      dispatch({
        type: 'FETCH_POST_CONTENT',
        alias: postAlias,
        payload: {
          title: postData.title,
          content: postData.content
          // TODO: please add more
        }
      })
    })

  }