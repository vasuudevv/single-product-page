import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyDMGwGoMqW_rmDaOqlFkNNAqM9OCVqQQ8I",
  authDomain: "clone-e1e61.firebaseapp.com",
  databaseURL:
    "https://clone-e1e61-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "clone-e1e61",
  storageBucket: "clone-e1e61.appspot.com",
  messagingSenderId: "365546151521",
  appId: "1:365546151521:web:9598392b757e7ae5865420",
  measurementId: "G-TKJBKGVQND",
};

const app = initializeApp(firebaseConfig, "secondary");
const db = getDatabase(app);

//updateStarCount(postElement, data);

// console.log(starCountRef);
// console.log(db);
export default db;
