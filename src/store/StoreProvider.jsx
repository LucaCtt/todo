import React, { createContext } from "react";
import { useLocalStore } from "mobx-react-lite";

import { createAuthStore, createItemsStore, createThemeStore } from "./store";

export const storeContext = createContext(null);

export default StoreProvider = ({ children }) => {
  /**
   * Creates a new store container, which wraps the various stores.
   */
  const store = {
    authStore: useLocalStore(createAuthStore),
    itemsStore: useLocalStore(createItemsStore),
    themeStore: useLocalStore(createThemeStore),
  };

  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
};
