// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore"
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQu_JW21MThx4r-ZGZ-dikNC1jpUHtR98",
  authDomain: "pingwin-63b61.firebaseapp.com",
  databaseURL: "https://pingwin-63b61-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pingwin-63b61",
  storageBucket: "pingwin-63b61.appspot.com",
  messagingSenderId: "679529703297",
  appId: "1:679529703297:web:23b1850acf49fbefef6a80"
};

// Initialize Firebase
export const firebaseapp = initializeApp(firebaseConfig)
//export const auth = getAuth(firebaseapp)

export const auth = initializeAuth(firebaseapp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const firestore = getFirestore(firebaseapp)
export const db = getDatabase(firebaseapp);
