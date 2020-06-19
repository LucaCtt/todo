import React, { createContext, useEffect } from "react";
import { AsyncStorage } from "react-native";
import { useLocalStore } from "mobx-react-lite";
import { reaction } from "mobx";

import { createThemeStore, createItemsStore } from "./store";

export const storeContext = createContext(null);

export default StoreProvider = ({ children }) => {
  const themeStore = useLocalStore(createThemeStore);
  const itemsStore = useLocalStore(createItemsStore);

  useEffect(() => {
    reaction(
      () => themeStore.theme,
      () => AsyncStorage.setItem("theme", themeStore.theme)
    );
  }, []);

  return (
    <storeContext.Provider value={{ themeStore, itemsStore }}>
      {children}
    </storeContext.Provider>
  );
};
