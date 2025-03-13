import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDOBJtmnqTToN_IvqP1fPNociy0vzQEMOw",
  authDomain: "learnly-294c8.firebaseapp.com",
  projectId: "learnly-294c8",
  storageBucket: "learnly-294c8.firebasestorage.app",
  messagingSenderId: "135731350722",
  appId: "1:135731350722:web:d6c088e9c8e3024c973f5b",
  measurementId: "G-CT7WK5000T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
export const db = getFirestore(app);
export const auth = getAuth(app);

// Initialize Analytics (only in browser environment)
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null; 