// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"





// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9__vNk21RtWZJhwjpyz5Xnx3iAEw_X_0",
  authDomain: "foodapp-aa4a4.firebaseapp.com",
  projectId: "foodapp-aa4a4",
  storageBucket: "foodapp-aa4a4.appspot.com",
  messagingSenderId: "51987555137",
  appId: "1:51987555137:web:3be5f7560c7199c36377c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage};