import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDPuGHIDsisHIRZ-x1-d5m-JUx0Jsv06kI",
  authDomain: "praveenoruganti-amaz.firebaseapp.com",
  databaseURL: "https://praveenoruganti-amaz.firebaseio.com",
  projectId: "praveenoruganti-amaz",
  storageBucket: "praveenoruganti-amaz.appspot.com",
  messagingSenderId: "93879146865",
  appId: "1:93879146865:web:edff52d9d5559bf170bed0",
  measurementId: "G-ZS6CS409PR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();
export default db;