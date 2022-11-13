import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBKbJCP0QtakDzW0qMjkUIWXjV8gci8GQw",
  authDomain: "devcamp9-d1490.firebaseapp.com",
  projectId: "devcamp9-d1490",
  storageBucket: "devcamp9-d1490.appspot.com",
  messagingSenderId: "1037623919825",
  appId: "1:1037623919825:web:bdd160447d6e667aedb1f0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);