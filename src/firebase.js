// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZ_ieLkjpdkW3P1zry6R8tRLYjBpH3Pu4",
  authDomain: "skel-co-industries-website.firebaseapp.com",
  projectId: "skel-co-industries-website",
  storageBucket: "skel-co-industries-website.firebasestorage.app",
  messagingSenderId: "127980125819",
  appId: "1:127980125819:web:2bd5664207ee95c3c4acde",
  measurementId: "G-RY543S2G0H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);