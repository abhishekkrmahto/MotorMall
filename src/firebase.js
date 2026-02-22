// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAh6pCXElnaL-ntR3U_PZkvm2vvD87WAGo",
  authDomain: "motormall2025.firebaseapp.com",
  projectId: "motormall2025",
  storageBucket: "motormall2025.firebasestorage.app",
  messagingSenderId: "919102915087",
  appId: "1:919102915087:web:aad8dca8754b7f700bd97a",
  measurementId: "G-FG594J3F15"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);