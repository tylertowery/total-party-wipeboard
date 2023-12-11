// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import * as config from '../../.env.local';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: NEXT_PUBLIC_apiKey,
  authDomain: NEXT_PUBLIC_authDomain,
  projectId: NEXT_PUBLIC_projectId,
  storageBucket: NEXT_PUBLIC_storageBucket,
  messagingSenderId: NEXT_PUBLIC_messagingSenderId,
  appId: NEXT_PUBLIC_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
