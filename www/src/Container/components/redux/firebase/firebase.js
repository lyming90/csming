import firebase from 'firebase/app';
import 'firebase/database';

// Initialize and export Firebase.
const config = {
  apiKey: "AIzaSyAQHHRSOyGX0D8B0V3cNyEawH-9wUFIRv4",
  authDomain: "csming-bce10.firebaseapp.com",
  databaseURL: "https://csming-bce10.firebaseio.com",
  projectId: "csming-bce10",
  storageBucket: "csming-bce10.appspot.com",
  messagingSenderId: "1077104744428"
};

export default firebase.initializeApp(config);