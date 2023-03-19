import firebase from "firebase/app";
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBxQn4A3XQ0ckX3omavfTV5InlXP1ZO3hQ",
    authDomain: "beach-dayta.firebaseapp.com",
    projectId: "beach-dayta",
    storageBucket: "beach-dayta.appspot.com",
    messagingSenderId: "754594776065",
    appId: "1:754594776065:web:82a1c93f570539b0a7ec00",
    measurementId: "G-QBX4KBQV4X"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;