import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCag1uM_-wLQJxfVfvw1AdDycLgNqPDoPM",
    authDomain: "ecommerce-website-e26e3.firebaseapp.com",
    databaseURL: "https://ecommerce-website-e26e3-default-rtdb.firebaseio.com",
    projectId: "ecommerce-website-e26e3",
    storageBucket: "ecommerce-website-e26e3.appspot.com",
    messagingSenderId: "201888341008",
    appId: "1:201888341008:web:b654657bcda4bc233b3e95",
    measurementId: "G-67CWYPHJ6W"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();