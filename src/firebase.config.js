import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyDfnTF_dWWi1P8YQl5IKtWJQASyUyfw6e8",
  authDomain: "shopcart-6a9ec.firebaseapp.com",
  projectId: "shopcart-6a9ec",
  storageBucket: "shopcart-6a9ec.appspot.com",
  messagingSenderId: "320671033472",
  appId: "1:320671033472:web:3256375f4d773a3c999e65",
  measurementId: "G-52CTGWBHLG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics;