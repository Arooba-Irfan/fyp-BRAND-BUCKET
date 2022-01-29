import firebase from 'firebase/app';
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAl0J10WH8aSTlA9KK8mjxBkaFrSLBc58I",
    authDomain: "buyfy-54387.firebaseapp.com",
    projectId: "buyfy-54387",
    storageBucket: "buyfy-54387.appspot.com",
    messagingSenderId: "770135629629",
    appId: "1:770135629629:web:a1d501278d6ee310466f54"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export var googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export var auth = firebase.auth()
export var firestore = firebase.firestore()
export var serverTimestamp = () => firebase.firestore.FieldValue.serverTimestamp();
export var storage = firebase.storage().ref()

export default firebase;
