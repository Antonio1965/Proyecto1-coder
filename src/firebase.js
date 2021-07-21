import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBqRWrqKgsftH0N9-oGz2XqVZzf78srJ2I",
    authDomain: "prueba-coder-41ed0.firebaseapp.com",
    projectId: "prueba-coder-41ed0",
    storageBucket: "prueba-coder-41ed0.appspot.com",
    messagingSenderId: "50872635810",
    appId: "1:50872635810:web:549231d1edbcc02c3c22fb"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  export{auth};