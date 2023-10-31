// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQu_JW21MThx4r-ZGZ-dikNC1jpUHtR98",
  authDomain: "pingwin-63b61.firebaseapp.com",
  projectId: "pingwin-63b61",
  storageBucket: "pingwin-63b61.appspot.com",
  messagingSenderId: "679529703297",
  appId: "1:679529703297:web:23b1850acf49fbefef6a80"
};

// Initialize Firebase
export const firebaseapp = initializeApp(firebaseConfig)