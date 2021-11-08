import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB1oYUbO5E_CKkXtR21km7OgVtXXK3hrRQ",
  authDomain: "horusdb.firebaseapp.com",
  databaseURL: "https://horusdb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "horusdb",
  storageBucket: "horusdb.appspot.com",
  messagingSenderId: "886688788014",
  appId: "1:886688788014:web:d9375f29b0a3b66d9739bf",
};


if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export default firebase.database().ref()
