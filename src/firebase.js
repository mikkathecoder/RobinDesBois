import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCBDk4W2P28M9l7HPKYAaHirHsWgmEH6do",
  authDomain: "robindesbois-1574f.firebaseapp.com",
  projectId: "robindesbois-1574f",
  storageBucket: "robindesbois-1574f.appspot.com",
  messagingSenderId: "352040997022",
  appId: "1:352040997022:web:a51fe9cf9294588287eb8f",
  measurementId: "G-FW011HDH7P",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };
