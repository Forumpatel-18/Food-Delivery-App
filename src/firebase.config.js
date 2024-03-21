import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDz05z4gY1xR1UaFBYQ7KLNOrTLA6BBOBw",
  authDomain: "restaurantapp-2add4.firebaseapp.com",
  databaseURL: "https://restaurantapp-2add4-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-2add4",
  storageBucket: "restaurantapp-2add4.appspot.com",
  messagingSenderId: "9099713328",
  appId: "1:9099713328:web:3e63aea8bb2a794c8606f5",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
