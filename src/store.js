import React, { createContext } from "react";
import createActions from "./createActions";
import useAsyncReducer from "./useAsyncReducer";
import { reducer } from "./reducer";

const initialState = [];
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useAsyncReducer(reducer, initialState);
  const actions = createActions(dispatch);

  return <Provider value={[state, actions]}>{children}</Provider>;
};

export { store, StateProvider };
