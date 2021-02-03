// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBYC1t-HQU7kLUBS9e1X0dUPuKFqugUCmc",
  authDomain: "clone-9c726.firebaseapp.com",
  projectId: "clone-9c726",
  storageBucket: "clone-9c726.appspot.com",
  messagingSenderId: "401310239832",
  appId: "1:401310239832:web:83d01d5eedd4790554ce2d",
  measurementId: "G-61Z051G6P7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
