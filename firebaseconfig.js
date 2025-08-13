// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1hR3HSSMnvus-WKBpzKai17KVxr8RgxU",
  authDomain: "ecosense-69.firebaseapp.com",
  projectId: "ecosense-69",
  storageBucket: "ecosense-69.firebasestorage.app",
  messagingSenderId: "733082526022",
  appId: "1:733082526022:web:c1eead5441c3c7bc560547",
  measurementId: "G-XLPE9VD7TS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);