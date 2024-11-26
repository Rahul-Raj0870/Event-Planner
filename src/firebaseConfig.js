// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyCeOdNqWyQjDdx5J-GeeHMFXprcJJes0iA",
    authDomain: "event-planner-b1233.firebaseapp.com",
    projectId: "event-planner-b1233",
    storageBucket: "event-planner-b1233.firebasestorage.app",
    messagingSenderId: "721593867691",
    appId: "1:721593867691:web:bd85c9db11be5f904a86ee",
    measurementId: "G-J2TL1XT617"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore and Storage
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage }; // Named exports