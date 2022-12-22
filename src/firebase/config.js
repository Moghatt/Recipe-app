import firebase from "firebase";
import "firebase/firebase-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDg0JMXz645lvOmk3T7AwCAaB2_hIEijdE",
  authDomain: "recipe-site-d801d.firebaseapp.com",
  projectId: "recipe-site-d801d",
  storageBucket: "recipe-site-d801d.appspot.com",
  messagingSenderId: "275062282707",
  appId: "1:275062282707:web:176300427b01ef1d487726",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
