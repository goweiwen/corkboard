import firebase from "firebase";

import { FIREBASE_CONFIG } from "./constants";

const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
const db = firebaseApp.database();

export default db;
