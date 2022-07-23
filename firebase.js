// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_kVAkY944-A-ZlefbfXFOGvdJLJRw5ho",
  authDomain: "disney-clone-3b06f.firebaseapp.com",
  projectId: "disney-clone-3b06f",
  storageBucket: "disney-clone-3b06f.appspot.com",
  messagingSenderId: "319556676970",
  appId: "1:319556676970:web:bc9c4b837a11956a498913"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
export {db};