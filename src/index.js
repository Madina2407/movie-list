// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD8oarar4zHBN6V3MbUlxNKN7ze6ZZHme8",
    authDomain: "first-project-d8601.firebaseapp.com",
    projectId: "first-project-d8601",
    storageBucket: "first-project-d8601.appspot.com",
    messagingSenderId: "681793250133",
    appId: "1:681793250133:web:1babd93233735d152f45dc",
    measurementId: "G-0XTB8T315K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
