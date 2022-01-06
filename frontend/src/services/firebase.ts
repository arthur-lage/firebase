import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAFL5dl84F1VrOO3Iz8h3sSmAUaQYb-VFg",
  authDomain: "school-app-607f6.firebaseapp.com",
  databaseURL: "https://school-app-607f6-default-rtdb.firebaseio.com",
  projectId: "school-app-607f6",
  storageBucket: "school-app-607f6.appspot.com",
  messagingSenderId: "1063514231601",
  appId: "1:1063514231601:web:6392b65f07b49bb4fe1610",
};

const app = initializeApp(firebaseConfig);

const database = getFirestore(app);

export { database };
