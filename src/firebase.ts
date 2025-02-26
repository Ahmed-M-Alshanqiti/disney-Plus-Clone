// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider, Auth, AuthProvider,onAuthStateChanged } from "firebase/auth";
// import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
//   measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
// };

// console.log("Firebase Config:", firebaseConfig); // Debugging


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase Authentication and get a reference to the service
// const auth:Auth = getAuth();
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       console.log("User is signed in:", user);
//     } else {
//       console.log("User is not signed in.");
//     }
//   });

// const firestore = getFirestore(app);

// // Create a Google Auth Provider
// const googleProvider: AuthProvider = new GoogleAuthProvider();



// // Export auth and provider
// export { auth, googleProvider,firestore,app };

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, Auth, AuthProvider, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

console.log("Firebase Config:", firebaseConfig); // Debugging
console.log("Project ID:", import.meta.env.VITE_FIREBASE_PROJECT_ID); // Debugging

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth: Auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is signed in:", user);
  } else {
    console.log("User is not signed in.");
  }
});

const firestore = getFirestore(app);

// Create a Google Auth Provider
const googleProvider: AuthProvider = new GoogleAuthProvider();

// Export auth and provider
export { auth, googleProvider, firestore, app };

