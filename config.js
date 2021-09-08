import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyB5GfnMa0cKtyKkYmku3mf_QWQwDaNjfkc",
  authDomain: "library-af39d.firebaseapp.com",
  databaseURL: 'https://library-af39d.firebaseio.com',
  projectId: "library-af39d",
  storageBucket: "library-af39d.appspot.com",
  messagingSenderId: "859412789832",
  appId: "1:859412789832:web:23a6efd38a5c8f569f367d"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
