// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9jJ1VkBJOID7WE-vjyOQ_e2N6fS9-JK4",
  authDomain: "fire-test-eb52f.firebaseapp.com",
  projectId: "fire-test-eb52f",
  storageBucket: "fire-test-eb52f.firebasestorage.app",
  messagingSenderId: "679660799000",
  appId: "1:679660799000:web:b6b61cec9d2f0fc813af6d",
  measurementId: "G-TL1X9H5LJ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export { app, auth };