// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// 取得firebase auth SDK
import { getAuth } from "firebase/auth";
// 取得firebase firestore SDK
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfmHxXiHSUrGvgEph6MNghK1WOTAb4nPo",
  authDomain: "netflix-react-44c30.firebaseapp.com",
  projectId: "netflix-react-44c30",
  storageBucket: "netflix-react-44c30.appspot.com",
  messagingSenderId: "386261804321",
  appId: "1:386261804321:web:059265b236e70b0fe78a60",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
