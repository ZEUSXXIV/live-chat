import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  // authDomain: "chat-ab746.firebaseapp.com",
  // projectId: "chat-ab746",
  // storageBucket: "chat-ab746.appspot.com",
  // messagingSenderId: "901216368405",
  // appId: "1:901216368405:web:8ec942ee51611df5c49b1c",
  apiKey: "AIzaSyDpjBcKunwAU01guF9CXLtXO76GZ-xI24w",
  authDomain: "vpchatappdemo.firebaseapp.com",
  projectId: "vpchatappdemo",
  storageBucket: "vpchatappdemo.appspot.com",
  messagingSenderId: "328321605172",
  appId: "1:328321605172:web:5894baea7b37da17547461",
  measurementId: "G-7VDJLDTYFW",
  
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
