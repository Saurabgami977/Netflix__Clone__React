import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDC5fIb_9Lpse9XsGusRgER9fSKxjtKtvs",
    authDomain: "netflix-clone-6cc34.firebaseapp.com",
    projectId: "netflix-clone-6cc34",
    storageBucket: "netflix-clone-6cc34.appspot.com",
    messagingSenderId: "819737203702",
    appId: "1:819737203702:web:aba1d436626ca76ff9edd7",
    measurementId: "G-NBCQQQDWGY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();


export { auth }
export default db;