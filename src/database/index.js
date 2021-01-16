import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCHVi3BTTlM_ktoh_PHR6xuhNMVa5PUzMg",
    authDomain: "sextopyshop.firebaseapp.com",
    projectId: "sextopyshop",
    storageBucket: "sextopyshop.appspot.com",
    messagingSenderId: "238596478190",
    appId: "1:238596478190:web:fe2de029476282a9f28fff"
})

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}


