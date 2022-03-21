
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD8ULv5nyGpfgU7iM1rZAM8OEGDWesVUms",
  authDomain: "recipeapp-18164.firebaseapp.com",
  projectId: "recipeapp-18164",
  storageBucket: "recipeapp-18164.appspot.com",
  messagingSenderId: "825002829222",
  appId: "1:825002829222:web:e0513c8fd842349cde9b67"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { db }