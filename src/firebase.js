// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration (must match your Firebase project)
const firebaseConfig = {
  apiKey: "AIzaSyC67RJ9Oahmi7ugfX8t8X2ZN7CjTuvc17o",
  authDomain: "portfolio-3e1cf.firebaseapp.com",
  projectId: "portfolio-3e1cf",
  storageBucket: "portfolio-3e1cf.appspot.com", // corrected
  messagingSenderId: "956474485724",
  appId: "1:956474485724:web:c0c93d412fa3e811c13d19",
  measurementId: "G-WE1WFGDR3F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

export { db };
