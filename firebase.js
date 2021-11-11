import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIRE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIRE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIRE_DATABASEURL,
  projectId: process.env.NEXT_PUBLIC_FIRE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIRE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIRE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIRE_APP_ID,
};


if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export default firebase.database().ref()


// const firebaseConfig = {
//   apiKey: "AIzaSyB1oYUbO5E_CKkXtR21km7OgVtXXK3hrRQ",
//   authDomain: "horusdb.firebaseapp.com",
//   databaseURL: "https://horusdb-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "horusdb",
//   storageBucket: "horusdb.appspot.com",
//   messagingSenderId: "886688788014",
//   appId: "1:886688788014:web:d9375f29b0a3b66d9739bf",
// };