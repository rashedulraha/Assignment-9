// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7YpN1PIjPbWZfdZ_3GIkJJsx4Quyar10",
  authDomain: "babybuzz-9cbb2.firebaseapp.com",
  projectId: "babybuzz-9cbb2",
  storageBucket: "babybuzz-9cbb2.firebasestorage.app",
  messagingSenderId: "190337546951",
  appId: "1:190337546951:web:4daeb59dd00c85b14c1ce2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
