// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getStorage} from 'firebase/storage'

const { initializeApp } = require('firebase/app')
const { getStorage } = require('firebase/storage')
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJCT42fF5cHHUKXsLeLOkXMZl1Sq1BY0U",
    authDomain: "kyoto-arc-2c.firebaseapp.com",
    projectId: "kyoto-arc-2c",
    storageBucket: "kyoto-arc-2c.appspot.com",
    messagingSenderId: "366175874349",
    appId: "1:366175874349:web:43cbed7a3f069c64ab37a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firebase_storage = getStorage(app);

module.exports = firebase_storage