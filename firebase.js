import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBtYffsXI4nlta8Oe82ptJGdF-vIy1MIQk",
  authDomain: "pokemarket-bdacd.firebaseapp.com",
  projectId: "pokemarket-bdacd",
  storageBucket: "pokemarket-bdacd.firebasestorage.app",
  messagingSenderId: "315842390173",
  appId: "1:315842390173:web:773aa2998347b949fccc74"
};

const app = initializeApp(firebaseConfig);

// Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

// Export them so other pages can use them
export { auth, db };