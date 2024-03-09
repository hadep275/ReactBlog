import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcefBXEJDiNdQnJkiWhuCBEw7qarbKoWk",
  authDomain: "scale-finance.firebaseapp.com",
  projectId: "scale-finance",
  storageBucket: "scale-finance.appspot.com",
  messagingSenderId: "36284345710",
  appId: "1:36284345710:web:2d6f3e9991f04ebd9fe57f",
  measurementId: "G-D8YQ4MNN6L"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };