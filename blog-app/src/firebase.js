import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAtls20Rz5g1NRj4DXs_ekFpV8QjGs3gw",
    authDomain: "blog-app-31e2d.firebaseapp.com",
    projectId: "blog-app-31e2d",
    storageBucket: "blog-app-31e2d.firebasestorage.app",
    messagingSenderId: "771809217885",
    appId: "1:771809217885:web:678c0efaebae01e8f66cb4",
    measurementId: "G-LBNWV64425"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
