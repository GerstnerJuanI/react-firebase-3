import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgUze98nH5Cjnd5-hwbdNmyAzykeasU48",
    authDomain: "react-firebase-5f7e6.firebaseapp.com",
    projectId: "react-firebase-5f7e6",
    storageBucket: "react-firebase-5f7e6.appspot.com",
    messagingSenderId: "1074718517732",
    appId: "1:1074718517732:web:4980eaf7b0317cb0b87ff1"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
export { auth }