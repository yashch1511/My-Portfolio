// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Firestore import

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
console.log("Firebase 1API Key:", process.env.NEXT_PUBLIC_FIREBASE_API_KEY);

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // Export Firestore for storing messages
