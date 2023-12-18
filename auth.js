import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC9iZI7nAtdRo6nMHN6_1nmVcYs-S6Gikg",
  authDomain: "biblioteca-d22b0.firebaseapp.com",
  projectId: "biblioteca-d22b0",
  storageBucket: "biblioteca-d22b0.appspot.com",
  messagingSenderId: "19673662517",
  appId: "1:19673662517:web:137540363b087e6e011d7c",
  measurementId: "G-8H1CYXJLBL"
};

firebase.initializeApp(firebaseConfig)
export default firebase.firestore();