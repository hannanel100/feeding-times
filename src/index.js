import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase/app";
import "firebase/auth";
import { FirebaseAuthProvider } from "@react-firebase/auth";
import { FirestoreProvider } from "@react-firebase/firestore";
import firebaseConfig from "./config/firebase";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { AuthProvider } from "./AuthProvider";

ReactDOM.render(
  <React.StrictMode>
    <FirestoreProvider firebase={firebase} {...firebaseConfig}>
      <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </FirebaseAuthProvider>
    </FirestoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
