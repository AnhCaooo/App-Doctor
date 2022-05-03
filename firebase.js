// Import the functions you need from the SDKs you need
import firebase from "firebase";
import "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYSBmyqSfHH5MosKbiAxAWPx2Wk7PgN0I",
  authDomain: "doctor-mobile-app-ba1ef.firebaseapp.com",
  databaseURL:
    "https://doctor-mobile-app-ba1ef-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "doctor-mobile-app-ba1ef",
  storageBucket: "doctor-mobile-app-ba1ef.appspot.com",
  messagingSenderId: "510646349622",
  appId: "1:510646349622:web:f247642fa25f2795bccd97",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();

// Initialize Firebase Realtime Database
const db = firebase.database();

export { auth, db };
