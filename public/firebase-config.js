// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCyR2YeDju9MRVcmKcnxwg8W4XYLzbrjk8",
//   authDomain: "nexiomart-otp.firebaseapp.com",
//   projectId: "nexiomart-otp",
//   storageBucket: "nexiomart-otp.appspot.com",
//   messagingSenderId: "912934255025",
//   appId: "1:912934255025:web:eb0aa3adf43344aa2ce590",
//   measurementId: "G-85PTP38RT1"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyR2YeDju9MRVcmKcnxwg8W4XYLzbrjk8",
  authDomain: "nexiomart-otp.firebaseapp.com",
  projectId: "nexiomart-otp",
  storageBucket: "nexiomart-otp.appspot.com",
  messagingSenderId: "912934255025",
  appId: "1:912934255025:web:eb0aa3adf43344aa2ce590",
  measurementId: "G-85PTP38RT1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
