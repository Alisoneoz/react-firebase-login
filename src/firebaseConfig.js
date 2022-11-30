 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
 
 
// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSRYrEFmCFY8RKv9Z1RNDkdxRmRwm8G-0",
  authDomain: "fir-react-practice-a2731.firebaseapp.com",
  projectId: "fir-react-practice-a2731",
  storageBucket: "fir-react-practice-a2731.appspot.com",
  messagingSenderId: "227933500250",
  appId: "1:227933500250:web:7e983f76de2cd739277963"
};
 
 
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
