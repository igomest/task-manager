// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"



const firebaseConfig = {
    apiKey: "AIzaSyB-mGon7v3OzxeS9-DS3TnJLkp6YLK0tcI",
    authDomain: "task-manager-cbf8b.firebaseapp.com",
    projectId: "task-manager-cbf8b",
    storageBucket: "task-manager-cbf8b.appspot.com",
    messagingSenderId: "662671448507",
    appId: "1:662671448507:web:7a6c5cccf2f3eb5de04c9e",
    measurementId: "G-1P7096L56E"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)