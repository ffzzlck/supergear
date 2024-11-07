// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB13Rq5LzQOIcBUazeUWDHZZhk288Oxy_c",
  authDomain: "restaurantapp-8eed6.firebaseapp.com",
  databaseURL: "https://restaurantapp-8eed6-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-8eed6",
  storageBucket: "restaurantapp-8eed6.appspot.com",
  messagingSenderId: "944282898683",
  appId: "1:944282898683:web:69315e3778097f2661605e",
  measurementId: "G-8NH08S2THG"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
