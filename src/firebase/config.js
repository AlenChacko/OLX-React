import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBl_2Yek_pNZauLRP4oFkt1ZWlijVr_gS4",
    authDomain: "olxdb-552e7.firebaseapp.com",
    projectId: "olxdb-552e7",
    storageBucket: "olxdb-552e7.appspot.com",
    messagingSenderId: "20057944593",
    appId: "1:20057944593:web:e89bba050acd3800eaf7b0",
    measurementId: "G-9GWQF05WCC"
  };

  export default firebase.initializeApp(firebaseConfig)
