import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBFZRi3rrGy6_vYOaVVlXe3vqRo8qcdtw",
  authDomain: "clone-2022-3c3c3.firebaseapp.com",
  projectId: "clone-2022-3c3c3",
  storageBucket: "clone-2022-3c3c3.appspot.com",
  messagingSenderId: "524550146561",
  appId: "1:524550146561:web:24afad6a7a304066e70e00",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
