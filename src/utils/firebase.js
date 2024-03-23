
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD26aU3f1R9VA595PPMMx0Wp2IBzfiEnQQ",
  authDomain: "netflixgpt-f1492.firebaseapp.com",
  projectId: "netflixgpt-f1492",
  storageBucket: "netflixgpt-f1492.appspot.com",
  messagingSenderId: "673073286128",
  appId: "1:673073286128:web:388406f691981d005deb35",
  measurementId: "G-D0VEX3JHQP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();