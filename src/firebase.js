// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
// import { getAuth } from "firebase/auth";
// console.log(process.env);
// const firebaseConfig = {
//   apiKey: process.env.FIREBASEAPIKEY,
//   authDomain: process.env.FIREBASEAUTHDOMAIN,
//   databaseURL: process.env.FIREBASEDATABASEURL,
//   projectId: "budget-buddy12",
//   storageBucket: "budget-buddy12.appspot.com",
//   messagingSenderId: process.env.FIREBASEMESSAGINGSENDERID,
//   appId: process.env.FIREBASEAPPID,
//   measurementId: process.env.FIREBASEMESUREMENTID,
// };
// console.log(process.env.FIREBASEAPIKEY);

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const db = getDatabase(app);
// export const auth = getAuth();


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChxVSdDPGCFKxOTpgI7EMPltVDBdeR2Cg",
  authDomain: "budget-buddy12.firebaseapp.com",
  databaseURL: "https://budget-buddy12-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "budget-buddy12",
  storageBucket: "budget-buddy12.appspot.com",
  messagingSenderId: "171882889213",
  appId: "1:171882889213:web:6ad444d6e742cb314da394",
  measurementId: "G-59M70NGWJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth();