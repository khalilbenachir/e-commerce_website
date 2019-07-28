import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'



const config = {
    apiKey: "AIzaSyCm9d3qSDRRWi8KF5tSTebEVjOym5Ph3-w",
    authDomain: "crwn-clothing-282e6.firebaseapp.com",
    databaseURL: "https://crwn-clothing-282e6.firebaseio.com",
    projectId: "crwn-clothing-282e6",
    storageBucket: "",
    messagingSenderId: "659375379637",
    appId: "1:659375379637:web:95f4555945c01331"
  };



firebase.initializeApp(config);

export const auth =firebase.auth();
export const firestore =firebase.firestore();


const provider =new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signinwithgoogle =()=>auth.signInWithPopup(provider);

export default firebase;
