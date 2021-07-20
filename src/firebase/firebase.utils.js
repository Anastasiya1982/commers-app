import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyC3b-lRSsKWldnvbjpMhLZLRAND2JGQXK8",
    authDomain: "crown-db-5e3d8.firebaseapp.com",
    projectId: "crown-db-5e3d8",
    storageBucket: "crown-db-5e3d8.appspot.com",
    messagingSenderId: "665920771609",
    appId: "1:665920771609:web:df47e9c23ad5c55e417c88"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore=firebase.firestore();
const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt:'select_account'
});
export const signInWithGoogle=()=>auth.signInWithPopup(provider)
export default firebase;
