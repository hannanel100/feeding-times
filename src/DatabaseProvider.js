import React, { useEffect, useState, createContext, useReducer } from "react";
import firebase from "./firebase";
import "firebase/firestore";
import { AuthContext } from "../../../AuthProvider";

import { useCollectionData } from "react-firebase-hooks/firestore";
const authContext = useContext(AuthContext);
const firestore = firebase.firestore();
export const DatabaseContext = createContext({});
const { Provider } = DatabaseContext;

export const DatabaseProvider = ({ children }) => {
  const feedingTimesRef = firestore.collection("feeding-times");
  const query = feedingTimesRef.orderBy("createdAt").limit(25);

  const [feedingTimes] = useCollectionData(query, { idField: "id" });
  console.log(feedingTimes);
  return <Provider value={{ feedingTimes }}>{children} </Provider>;
};
