import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA8rnPYu_g7ER5xFq6R1A7cLaD1v903dHQ',
  authDomain: 'aztecmun-4f9c3.firebaseapp.com',
  projectId: 'aztecmun-4f9c3',
  storageBucket: 'aztecmun-4f9c3.appspot.com',
  messagingSenderId: '559967659611',
  appId: '1:559967659611:web:792c511bf3495350cb817e',
  measurementId: 'G-RHQDK94M1Q',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db };
