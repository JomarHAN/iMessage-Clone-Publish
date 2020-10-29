import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBjtKSuidwJUu2LdtPuuFyLbwkPO50mpms",
    authDomain: "imessage-clone-ad53b.firebaseapp.com",
    databaseURL: "https://imessage-clone-ad53b.firebaseio.com",
    projectId: "imessage-clone-ad53b",
    storageBucket: "imessage-clone-ad53b.appspot.com",
    messagingSenderId: "607084703154",
    appId: "1:607084703154:web:55759ef84d676aee0108ab"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export {
    provider,
    auth,
};

export default db