// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGlGbd1vqrLgce9cf1zWCRt3qU8669Rlc",
  authDomain: "reactecommerce-35ea2.firebaseapp.com",
  projectId: "reactecommerce-35ea2",
  storageBucket: "reactecommerce-35ea2.appspot.com",
  messagingSenderId: "251525408531",
  appId: "1:251525408531:web:6b3d35a8245ae5d02fdce6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export {fireDB,auth};
