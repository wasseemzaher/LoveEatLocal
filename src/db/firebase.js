import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyABRrlwa662DIR_u2zMlAne79QXhUtbFDI",
    authDomain: "loveeatlocal-36368.firebaseapp.com",
    databaseURL: "https://loveeatlocal-36368.firebaseio.com",
    projectId: "loveeatlocal-36368",
    storageBucket: "loveeatlocal-36368.appspot.com",
    messagingSenderId: "711260753970",
    appId: "1:711260753970:web:a174ea2261748bd56cec2b",
    measurementId: "G-L1SG5GFG09"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.analytics();

  export default firebase;