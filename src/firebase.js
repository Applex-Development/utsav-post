import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDJdoTqBGCWnwYQLk_ALnFYSwVKHKQ4XVw",
    authDomain: "utsavlogin.firebaseapp.com",
    projectId: "utsavlogin",
    storageBucket: "utsavlogin.appspot.com",
    messagingSenderId: "812399260147",
    appId: "1:812399260147:web:e00ea8fa24770b2a126286"
});

const auth = firebase.auth();
const db = firebaseConfig.firestore();
const storage = firebase.storage();

export { auth, db, storage };
