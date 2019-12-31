import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAFW_FnpNnHZr8Cl9rVJqGFuqnU8tf1dvA",
  authDomain: "my-pocket-79ccf.firebaseapp.com",
  databaseURL: "https://my-pocket-79ccf.firebaseio.com",
  projectId: "my-pocket-79ccf",
  storageBucket: "my-pocket-79ccf.appspot.com",
  messagingSenderId: "1076895554182",
  appId: "1:1076895554182:web:29e67faf484fc620f98f07",
  measurementId: "G-PH4JGRM54L",
}

firebase.initializeApp(config);

export default firebase;
