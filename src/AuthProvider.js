import React, { useEffect, useState, createContext, useReducer } from "react";
import firebase from "./firebase";
// import { useAuthState } from "react-firebase-hooks/auth";

export const AuthContext = createContext({});
const { Provider } = AuthContext;

export const AuthProvider = ({ children }) => {
  // const [user, loading, error] = useAuthState(firebase.auth());
  const [user, setUser] = useState(null);
  const [loadingAuthState, setLoadingAuthState] = useState(true);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setLoadingAuthState(false);
      } else {
        setUser(null);
        setLoadingAuthState(false);
      }
    });
  }, []);
  return (
    <Provider
      value={{
        user,
        authenticated: user !== null,
        setUser,
        loadingAuthState,
      }}
    >
      {children}
    </Provider>
  );
};
