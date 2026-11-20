import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage, type FirebaseStorage } from 'firebase/storage';

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
export const firebaseConfigured = Boolean(config.apiKey && config.authDomain && config.projectId && config.appId);
export const app = getApps().length ? getApp() : initializeApp(config);
// Firebase Auth validates the API key during initialization. Avoid creating it during
// Next.js server prerendering, where public Firebase env vars may not be available.
export const auth = (typeof window !== 'undefined' ? getAuth(app) : null) as Auth;
export const db = getFirestore(app);
export const storage = (typeof window !== 'undefined' ? getStorage(app) : null) as FirebaseStorage;
