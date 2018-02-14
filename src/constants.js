import firebase from "firebase";

export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDl2wVlDbEh15HoJpJwE1jqX03pM_OdrAY",
  authDomain: "goweiwen-corkboard.firebaseapp.com",
  databaseURL: "https://goweiwen-corkboard.firebaseio.com",
  projectId: "goweiwen-corkboard",
  storageBucket: "goweiwen-corkboard.appspot.com",
  messagingSenderId: "398496466713"
};

export const FIREBASEUI_CONFIG = {
  signInSuccessUrl: "/",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  tosUrl: "/terms"
};
