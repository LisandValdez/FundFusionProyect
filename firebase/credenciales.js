import {getAuth} from "firebase/auth"
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbfZ2jnO2j8K1dXFzOMs3zPWwUvO2AW5c",
  authDomain: "fundfusion-68ede.firebaseapp.com",
  projectId: "fundfusion-68ede",
  storageBucket: "fundfusion-68ede.appspot.com",
  messagingSenderId: "101956066109",
  appId: "1:101956066109:web:b5acf8bcd8776ef5d10354"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);