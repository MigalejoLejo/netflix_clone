// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5ZjJVxesJEvNlstV3y2pQ41N0U3RAKe8",
  authDomain: "netflix-d9659.firebaseapp.com",
  projectId: "netflix-d9659",
  storageBucket: "netflix-d9659.appspot.com",
  messagingSenderId: "468535786340",
  appId: "1:468535786340:web:be0f37ceca0eea53dd5871",
  measurementId: "G-1DXQ1MWZ47"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
const auth = getAuth(app);

// const analytics = getAnalytics(app);

export {auth}