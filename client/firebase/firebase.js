import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDmw3QOI_wAOoU6ii0wuMwpALdroeQmJWk",
  authDomain: "chatus-3fcc4.firebaseapp.com",
  projectId: "chatus-3fcc4",
  storageBucket: "chatus-3fcc4.appspot.com",
  messagingSenderId: "956432481009",
  appId: "1:956432481009:web:937105e5a74feb930a8750
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);