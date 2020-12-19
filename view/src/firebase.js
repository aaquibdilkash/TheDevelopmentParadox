import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAAoVV3KTPcL4IuoQwRxy6UR2ypxtAj9vE",
    authDomain: "thedevelopmentparadox.firebaseapp.com",
    projectId: "thedevelopmentparadox",
    storageBucket: "thedevelopmentparadox.appspot.com",
    messagingSenderId: "728503463094",
    appId: "1:728503463094:web:454afd4d647e9c95d84a17",
    measurementId: "G-KRJHDVG8Z5"
  };

  firebase.initializeApp(firebaseConfig)
  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()

  export const signInWithGoogle = () => {
    auth.signInWithPopup(provider)
  }