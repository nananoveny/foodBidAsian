// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDK1JA2irTvNHbDu6AZb4ExnexJ7EJx93Y",
  authDomain: "foodbid-c1444.firebaseapp.com",
  projectId: "foodbid-c1444",
  storageBucket: "foodbid-c1444.appspot.com",
  messagingSenderId: "314275855127",
  appId: "1:314275855127:web:e47cf0a021c4729bd1d552",
  measurementId: "G-QHP3MPSTSN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app, "gs://foodbid-c1444.appspot.com");
