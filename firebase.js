import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3HRgkm4ZEcy4lJqlC9-EMx02QVbBe3dU",
  authDomain: "covi-chat.firebaseapp.com",
  projectId: "covi-chat",
  storageBucket: "covi-chat.appspot.com",
  messagingSenderId: "793206081551",
  appId: "1:793206081551:web:52f05a951bd922083cbb7a",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
