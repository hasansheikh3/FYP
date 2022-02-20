// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/auth';
// import {auth} from 'firebase/firebase-auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoBG-7g9rsbuo1hMCiVmfRc53XD_JXF7E",
  authDomain: "fyp-app-fridge.firebaseapp.com",
  projectId: "fyp-app-fridge",
  storageBucket: "fyp-app-fridge.appspot.com",
  messagingSenderId: "836575476043",
  appId: "1:836575476043:web:9e9b48640bbf1f8622d0ce",
  measurementId: "G-475TP1B7XS"
};

// Initialize Firebase

let Firebase;

if (firebase.apps.length === 0) {
  Firebase =  firebase.initializeApp(firebaseConfig);
}


export default Firebase;