import firebase from "firebase/app";
import "firebase/auth";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFpEz-ghpdUTrvZlfnvJWPkjTtKgER3xI",
  authDomain: "startuphive-596f3.firebaseapp.com",
  projectId: "startuphive-596f3",
  storageBucket: "startuphive-596f3.appspot.com",
  messagingSenderId: "382663541457",
  appId: "1:382663541457:web:da59ce69ed86ef44febbf0",
  measurementId: "G-J5GKCEFCZB",
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app);
export default app;
