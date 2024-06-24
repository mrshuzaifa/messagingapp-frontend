import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl6tkPWjklFOHAoJP-wraaw5rjoUFkItk",
  authDomain: "mtr-messagingapp.firebaseapp.com",
  projectId: "mtr-messagingapp",
  storageBucket: "mtr-messagingapp.appspot.com",
  messagingSenderId: "192203300810",
  appId: "1:192203300810:web:698d5b7808b0ecb61ff933"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider();
export { auth, provider }
export default db