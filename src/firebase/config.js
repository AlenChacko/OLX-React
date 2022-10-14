import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGuExknOjopP6k0-vIvmw99sTr4kVIRJk",
  authDomain: "react--olx-2052c.firebaseapp.com",
  projectId: "react--olx-2052c",
  storageBucket: "react--olx-2052c.appspot.com",
  messagingSenderId: "329794873075",
  appId: "1:329794873075:web:00f4e52a3b22462e64b986",
  measurementId: "G-4CJB9PJYW5"
};

  export default firebase.initializeApp(firebaseConfig)
