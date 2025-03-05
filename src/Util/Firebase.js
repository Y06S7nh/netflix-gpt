// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfet7sJ6DWPXQ4QjLKku5lhuB-33c0MPQ",
  authDomain: "netflixgpt-db2e8.firebaseapp.com",
  projectId: "netflixgpt-db2e8",
  storageBucket: "netflixgpt-db2e8.firebasestorage.app",
  messagingSenderId: "1031155396356",
  appId: "1:1031155396356:web:2c3d3a6695c66896536a51",
  measurementId: "G-6FVX1YLXW9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();