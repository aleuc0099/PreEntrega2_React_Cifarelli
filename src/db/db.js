import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkXPHTDsTQTS_fnoledavE5km6fBd6Vz0",
  authDomain: "alejo-foods.firebaseapp.com",
  projectId: "alejo-foods",
  storageBucket: "alejo-foods.appspot.com",
  messagingSenderId: "800689593567",
  appId: "1:800689593567:web:ea24511d75ee961fb85d6a",
};

initializeApp(firebaseConfig);

const db = getFirestore();

export default db;
