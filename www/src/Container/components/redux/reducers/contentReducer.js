import firebase from '../firebase';

const contentReducer = (state = [], action) => {
  console.log("Passed to reducer!");
  switch(action.type) {
    case 'RETRIEVE_CONTENT_BY_PAGE_NAME':
      const firebaseRef = firebase.database().ref('/statics/' + action.payload.pageName);
      firebaseRef.once('value').then(snapshot => {
        console.log("Snapshot.val() is ", snapshot.val());
        return {
          ...state,
          content: snapshot.val()
        }
      });  // THIS IS VERY BAD
    default:
      return state;
  }
};

// const retrieveContentByPageName = (pageName) => {
//   const firebaseRef = firebase.database().ref('/statics');
//   let _snapshot;
//   return firebaseRef.once(pageName).then(snapshot => {
//     _snapshot = snapshot;
//     console.log("Snapshot, ", snapshot);
//     return snapshot.val();
//   });
// }

export default contentReducer;