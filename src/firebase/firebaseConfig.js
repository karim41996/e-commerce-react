// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVCE7SDntMOO7yScAqAX2u2LTLy5ZpDxY",
  authDomain: "a4youandme-store.firebaseapp.com",
  databaseURL: "https://a4youandme-store-default-rtdb.firebaseio.com",
  projectId: "a4youandme-store",
  storageBucket: "a4youandme-store.firebasestorage.app",
  messagingSenderId: "719925501283",
  appId: "1:719925501283:web:4a1bb4d52c84fd8509c756",
  measurementId: "G-M55QKM2F54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);