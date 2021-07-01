import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAcLGks7sq6Hbj_yWuR9uKxvV-GWHTaoQU",
  authDomain: "eshop-1aedf.firebaseapp.com",
  projectId: "eshop-1aedf",
  storageBucket: "eshop-1aedf.appspot.com",
  messagingSenderId: "687172047591",
  appId: "1:687172047591:web:b5925b86924d048eabc842",
  measurementId: "G-5RNKHSRPCN",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error created user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

// To trigger the google pop up when ever we use the google auth
provider.setCustomParameters({ prompt: "select_account" });

// We just want google signin that we put only provider here
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
