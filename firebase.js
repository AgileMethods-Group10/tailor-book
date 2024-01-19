// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg7ctgRgIzI0hKx3mNmSIcqqpa1GsnxGs",
  authDomain: "agilemethods-dd0ed.firebaseapp.com",
  projectId: "agilemethods-dd0ed",
  storageBucket: "agilemethods-dd0ed.appspot.com",
  messagingSenderId: "325879160904",
  appId: "1:325879160904:web:dbe74888f7e3ad966f787d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
