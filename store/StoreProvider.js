import React, { createContext, useEffect } from "react";
import { AsyncStorage } from "react-native";
import { useLocalStore } from "mobx-react-lite";
import { reaction } from "mobx";

import createStore from "./store";

export const storeContext = createContext(null);

export const StoreProvider = ({ children }) => {
  const store = useLocalStore(createStore);

  useEffect(() => {
    reaction(
      () => store.theme,
      () => AsyncStorage.setItem("theme", store.theme)
    );
  }, []);

  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
};
