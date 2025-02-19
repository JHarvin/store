import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBnJUOM_TdwC4ZfR2yfgYN4MvHce-Tm1Ts",
    authDomain: "storeonline-ab504.firebaseapp.com",
    projectId: "storeonline-ab504",
    storageBucket: "storeonline-ab504.firebasestorage.app",
    messagingSenderId: "724279637071",
    appId: "1:724279637071:web:0584a5c78b6f10c1c6663a"
  };

  const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  const db = firebaseApp.firestore();
  const storage = firebaseApp.storage(); //para imagenes
  const auth = firebaseApp.auth();