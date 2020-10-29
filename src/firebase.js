import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "FIREBASE_APIKEY",
    authDomain: "imessage-clone-ad53b.firebaseapp.com",
    databaseURL: "https://imessage-clone-ad53b.firebaseio.com",
    projectId: "imessage-clone-ad53b",
    storageBucket: "imessage-clone-ad53b.appspot.com",
    messagingSenderId: "FIREBASE_MSG_ID",
    appId: "FIREBASE_APP_ID"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export {
    provider,
    auth,
};

export default db
