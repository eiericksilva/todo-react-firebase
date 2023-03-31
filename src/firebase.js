import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBF0EJ6IoaK10Rpi8NDwscaKDXGVQ--axw",
  authDomain: "todo-firebase-36932.firebaseapp.com",
  projectId: "todo-firebase-36932",
  storageBucket: "todo-firebase-36932.appspot.com",
  messagingSenderId: "202390877575",
  appId: "1:202390877575:web:3fd3fc2f0a18b1a05a8f22",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
