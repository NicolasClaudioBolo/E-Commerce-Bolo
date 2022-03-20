
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHmhdNNpJzBHS_DjOAdM6JvZNmWxa3QRE",
  authDomain: "e-commerce-bolo.firebaseapp.com",
  projectId: "e-commerce-bolo",
  storageBucket: "e-commerce-bolo.appspot.com",
  messagingSenderId: "911518958524",
  appId: "1:911518958524:web:f72922eeec858b1441e1b9"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

