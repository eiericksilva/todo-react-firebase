import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "todo-firebase-36932.firebaseapp.com",
  projectId: "todo-firebase-36932",
  storageBucket: "todo-firebase-36932.appspot.com",
  messagingSenderId: "202390877575",
  appId: "1:202390877575:web:3fd3fc2f0a18b1a05a8f22",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
