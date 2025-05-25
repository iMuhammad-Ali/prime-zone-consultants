import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEuromAy8nAaaGV61iXioTnMZEqkiET7g",
  authDomain: "elearning-9b8a0.firebaseapp.com",
  databaseURL: "https://elearning-9b8a0-default-rtdb.firebaseio.com",
  projectId: "elearning-9b8a0",
  storageBucket: "elearning-9b8a0.appspot.com",
  messagingSenderId: "537561500856",
  appId: "1:537561500856:web:42593e9e79b7538df1384d",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, db, storage, auth };
