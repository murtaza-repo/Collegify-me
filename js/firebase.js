// // Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyAoohjfddblUIYfJkdeXPTEjC1mtv1iWAA",
//     authDomain: "collegify-b0bc8.firebaseapp.com",
//     databaseURL: "https://collegify-b0bc8.firebaseio.com",
//     storageBucket: "collegify-b0bc8.appspot.com",
//     projectId: "collegify-b0bc8",
//     appId: "1:873475671089:web:8c7070ed5e3185ff92c110",
//     measurementId: "G-HEHYFZFQSW"
//   };

  const firebaseConfig = {
    apiKey: "AIzaSyAlDrqLkwDA5ZeUAjj4qioPLm7Y5BAym7k",
    authDomain: "collegify-me.firebaseapp.com",
    databaseURL: "https://collegify-me-default-rtdb.firebaseio.com/",
    projectId: "collegify-me",
    storageBucket: "collegify-me.appspot.com",
    messagingSenderId: "104174560597",
    appId: "1:104174560597:web:ac67d9cf900cd5dcce3bdc"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//auth and firestore
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
