import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDRwhuZiJPSbcvckkphm1CTyMrxZHIG30c",
    authDomain: "hcfbtr-brocure-resource.firebaseapp.com",
    projectId: "hcfbtr-brocure-resource",
    storageBucket: "hcfbtr-brocure-resource.firebasestorage.app",
    messagingSenderId: "541292067142",
    appId: "1:541292067142:web:e9d9a80870f47c607bcd47",
    measurementId: "G-FD1QVBZ3SR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
