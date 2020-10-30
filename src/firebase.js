// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCmEJdJQp4S-E6qATUWY_S90_M_nfxERhg",
    authDomain: "clone-e8266.firebaseapp.com",
    databaseURL: "https://clone-e8266.firebaseio.com",
    projectId: "clone-e8266",
    storageBucket: "clone-e8266.appspot.com",
    messagingSenderId: "324294900071",
    appId: "1:324294900071:web:4e918c1088482239df57c2",
    measurementId: "G-5PTF9Y53YP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db , auth};