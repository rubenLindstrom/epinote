import React from "react";

const firebase = require("firebase");
require("firebase/firestore");

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyB3Gsyx5JeNgVybhVDv-q7xW0RcT4Rc5Vw",
  authDomain: "epinote-e9d86.firebaseapp.com",
  databaseURL: "https://epinote-e9d86.firebaseio.com",
  projectId: "epinote-e9d86",
  storageBucket: "epinote-e9d86.appspot.com",
  messagingSenderId: "299810809164",
  appId: "1:299810809164:web:b8a42ffdf90ed16caf1be9",
  measurementId: "G-E0HCHEWGHT"
});
firebase.analytics();

export const FirebaseContext = React.createContext(firebase);
