// src/firebase.js

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAdmlzzWz8m9Z3nqsAyQ2wx0wsbYZs8wKo",
  authDomain: "officehub-c6c1b.firebaseapp.com",
  projectId: "officehub-c6c1b",
  storageBucket: "officehub-c6c1b.firebasestorage.app", // ← 「firebasestorage.app」じゃなく「appspot.com」が正解
  messagingSenderId: "281713006483",
  appId: "1:281713006483:web:dc517b215d2b54a37e7a66"
};

export const app = initializeApp(firebaseConfig);
