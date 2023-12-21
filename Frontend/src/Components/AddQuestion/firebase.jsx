import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDfS-w8koARwtG1U4qvBkDRt3lylbB4iIs",
    authDomain: "quora-clone-63b45.firebaseapp.com",
    projectId: "quora-clone-63b45",
    storageBucket: "quora-clone-63b45.appspot.com",
    messagingSenderId: "1048451481384",
    appId: "1:1048451481384:web:8888d098ffd20a5b925a1d",
    measurementId: "G-ZSJ6TX8HX8",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
