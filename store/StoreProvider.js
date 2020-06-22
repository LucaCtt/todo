import React, { createContext } from "react";
import { useLocalStore } from "mobx-react-lite";

import { createThemeStore, createItemsStore, createAuthStore } from "./store";

export const storeContext = createContext(null);

export default StoreProvider = ({ children }) => {
  const store = {
    themeStore: useLocalStore(createThemeStore),
    itemsStore: useLocalStore(createItemsStore),
    authStore: useLocalStore(createAuthStore),
  };

  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
};
