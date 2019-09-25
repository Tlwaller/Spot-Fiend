import firebase from 'firebase'
import 'firebase/storage';

//initialize firebase
const firebaseConfig = {
    apiKey: "AIzaSyAbzENhnl4kwF0m6YIxdAUcWrBUzFoIwOg",
    authDomain: "spot-fiend-4565d.firebaseapp.com",
    databaseURL: "https://spot-fiend-4565d.firebaseio.com",
    projectId: "spot-fiend-4565d",
    storageBucket: "spot-fiend-4565d.appspot.com",
    messagingSenderId: "616247293303",
    appId: "1:616247293303:web:7c31602b3248f482755d72",
    measurementId: "G-MDQP7P4YTX"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
    storage, firebase as default
}