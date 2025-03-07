import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBwbEr0oSHoYGOkOQuFlroraOYcsG-1GzU",
  authDomain: "jsonplaceholder-auth.firebaseapp.com",
  projectId: "jsonplaceholder-auth",
  storageBucket: "jsonplaceholder-auth.appspot.com", 
  messagingSenderId: "460231133447",
  appId: "1:460231133447:web:6afca6cd6742b42d731da2",
  measurementId: "G-ZMKHMZ474X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

export { auth };
export default app;
