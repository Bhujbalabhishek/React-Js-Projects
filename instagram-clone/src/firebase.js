import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDRU48sN63imeZ4j0E5zx3PvhVK_gdMldA",
    authDomain: "instagram-clone-3e363.firebaseapp.com",
    databaseURL: "https://instagram-clone-3e363.firebaseio.com",
    projectId: "instagram-clone-3e363",
    storageBucket: "instagram-clone-3e363.appspot.com",
    messagingSenderId: "384861105477",
    appId: "1:384861105477:web:c5911166ac19d067f8e22c",
    measurementId: "G-3Y5LWGLBVX"

  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

export {db, auth, storage};