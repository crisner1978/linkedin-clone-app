import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from '@firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBbdFMbDqS10NhXQsfHZnFfbkJX_yyCxGE",
  authDomain: "linkedin-clone-crise.firebaseapp.com",
  projectId: "linkedin-clone-crise",
  storageBucket: "linkedin-clone-crise.appspot.com",
  messagingSenderId: "911409074556",
  appId: "1:911409074556:web:1427361897229adaa354f9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { app, createUserWithEmailAndPassword, auth, db, onAuthStateChanged}



// db.collection('users').getDocs();
// const usersCol = collection(db, 'users');
// const snapshot = await getDocs(usersCol)

// // Detect auth state
// auth.onAuthStateChanged(user => {

// })
// onAuthStateChanged(auth, user => {
//     if(user != null) {
//         console.log('logged in');
//     } else {
//         console.log('No user');
//     }
// })