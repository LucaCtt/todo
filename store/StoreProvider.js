import React, { createContext } from "react";
import { useLocalStore } from "mobx-react-lite";

import createStore from "./store";

export const storeContext = createContext(null);

export const StoreProvider = ({ children }) => {
  const store = useLocalStore(createStore);
  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
};
