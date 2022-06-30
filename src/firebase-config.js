import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAu9UKQyW9zpw_hpsXLcRMSYfZvtiUGF5U",
    authDomain: "react-authentication-tut-5cb69.firebaseapp.com",
    projectId: "react-authentication-tut-5cb69",
    storageBucket: "react-authentication-tut-5cb69.appspot.com",
    messagingSenderId: "126904400543",
    appId: "1:126904400543:web:f1a09d449f6c9d903f00aa",
    measurementId: "G-VFRY6ERDK0"
  };

  const app = initializeApp(firebaseConfig)
  export const auth = getAuth(app)