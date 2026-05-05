import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADhBxaoQzrVg-43DbmIG5-Yg4crsysrTQ",
  authDomain: "my-app-172e0.firebaseapp.com",
  projectId: "my-app-172e0",
  storageBucket: "my-app-172e0.firebasestorage.app",
  messagingSenderId: "495528454462",
  appId: "1:495528454462:web:131b3da56dea6ae5db246f",
  measurementId: "G-PJ2XNGDEG5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);