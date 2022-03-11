import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBsAjr0_RBSpju_9nLgNxTT_4qhYT0ELZ0",
    authDomain: "nextjsfirebase-14952.firebaseapp.com",
    projectId: "nextjsfirebase-14952",
    storageBucket: "nextjsfirebase-14952.appspot.com",
    messagingSenderId: "877534026703",
    appId: "1:877534026703:web:5be7c713a0aafbf479d0ba",
    measurementId: "G-XDV7DYKDCE"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth;
export const firestore = firebase.firestore;
export const storage  = firebase.storage;
