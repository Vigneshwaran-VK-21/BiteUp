// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "biteup-food-delivery.firebaseapp.com",
  projectId: "biteup-food-delivery",
  storageBucket: "biteup-food-delivery.firebasestorage.app",
  messagingSenderId: "901596959147",
  appId: "1:901596959147:web:2839b73c4ae983c6c302ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {app,auth}