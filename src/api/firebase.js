import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1UrPZKfEHOh3boASkOZjB7e8EplwoIKQ",
  authDomain: "mdnaiem-5540b.firebaseapp.com",
  projectId: "mdnaiem-5540b",
  storageBucket: "mdnaiem-5540b.appspot.com",
  messagingSenderId: "840442077905",
  appId: "1:840442077905:web:f4099521d251fe5d001bf0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dbstore = getFirestore(app);
export const dbbase = getDatabase(app);
export const auth = getAuth(app);
export default app;
