// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { 
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile
  } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: "banana-music-e0980",
  storageBucket: "banana-music-e0980.firebasestorage.app",
  messagingSenderId: "249505250597",
  appId: "1:249505250597:web:9038ffac53be1e15b62ecc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export const createUserDocument = async (user, additionalData = {}) => {
    if (!user) return;
  
    const userRef = doc(db, "users", user.uid);
    await setDoc(userRef, {
      uid: user.uid,
      email: user.email,
      name: additionalData.name || user.displayName || "",
      liked: [],
      createdAt: new Date(),
    }, { merge: true });
};

export const signUpWithEmail = async (email, password, name) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
      await createUserDocument(userCredential.user, { name });
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  };

  export const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      await createUserDocument(result.user);
      return result.user;
    } catch (error) {
      throw error;
    }
  };

