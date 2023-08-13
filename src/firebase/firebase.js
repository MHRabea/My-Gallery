import { initializeApp } from "firebase/app";
import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7cHZKXxxEVWdzCKwmA1qHGeF07zAHs0c",
  authDomain: "gallery-app-c90de.firebaseapp.com",
  projectId: "gallery-app-c90de",
  storageBucket: "gallery-app-c90de.appspot.com",
  messagingSenderId: "681495795748",
  appId: "1:681495795748:web:520d5dd91480ee6452e0b1",
};

export const app = initializeApp(firebaseConfig);
export const storage = firebase.storage();
export const firestore = firebase.firestore();  
