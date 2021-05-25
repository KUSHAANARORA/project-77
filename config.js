import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyCB3Xbdg2aS3wy1C2RI_tPbDfi01iRVc_I",
    authDomain: "barter-app-ed40f.firebaseapp.com",
    projectId: "barter-app-ed40f",
    storageBucket: "barter-app-ed40f.appspot.com",
    messagingSenderId: "550846791322",
    appId: "1:550846791322:web:8fda223d9df5c2dacea923"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()