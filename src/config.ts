import { getApps, initializeApp } from "firebase/app";


// <- initialization ->
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "clace-fa078.firebaseapp.com",
    projectId: "clace-fa078",
    storageBucket: "clace-fa078.appspot.com",
    messagingSenderId: "323117669192",
    appId: process.env.APP_ID,
    measurementId: "G-0VMR8LPZ3X"
  }
let getApp;
if (!getApps().length) {
    getApp = initializeApp(firebaseConfig)
}

export const app = getApp