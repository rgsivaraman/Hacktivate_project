// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBKKOoA-TFIDN-xSWiuuI_w_WJJT5Z-z4w",
    authDomain: "wechat-2abcd.firebaseapp.com",
    projectId: "wechat-2abcd",
    storageBucket: "wechat-2abcd.appspot.com",
    messagingSenderId: "197489862970",
    appId: "1:197489862970:web:c56bf26fdf3e12d0d48803"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);