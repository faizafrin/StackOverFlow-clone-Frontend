import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5fGDpsRgrQjh11a7QmAchIG4BE2ZeuEw",
  authDomain: "stack-overflow-clone-5a5fe.firebaseapp.com",
  projectId: "stack-overflow-clone-5a5fe",
  storageBucket: "stack-overflow-clone-5a5fe.appspot.com",
  messagingSenderId: "934860226319",
  appId: "1:934860226319:ios:54fa575ef6ee32debb087a",
 
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase };
export default getFirestore();