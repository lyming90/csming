import * as firebase from 'firebase/app';
import flamelink from 'flamelink';

// Initialize and export Firebase.
const firebaseConfig = {
  apiKey: "AIzaSyAQHHRSOyGX0D8B0V3cNyEawH-9wUFIRv4",
  authDomain: "csming-bce10.firebaseapp.com",
  databaseURL: "https://csming-bce10.firebaseio.com",
  projectId: "csming-bce10",
  storageBucket: "csming-bce10.appspot.com",
  messagingSenderId: "1077104744428"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const flamelinkInit = flamelink({ firebaseApp });

export default flamelinkInit;