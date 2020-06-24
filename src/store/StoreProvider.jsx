import React, { createContext } from "react";
import { useLocalStore } from "mobx-react-lite";

import { createAuthStore, createItemsStore, createThemeStore } from "./store";

export const storeContext = createContext(null);

export default StoreProvider = ({ children }) => {
  /**
   * Creates a new store container, which wraps the various stores.
   *
   * The *initialize()* method should be called (ideally at startup) to
   * initialize the stores.
   */
  const store = {
    authStore: useLocalStore(createAuthStore),
    itemsStore: useLocalStore(createItemsStore),
    themeStore: useLocalStore(createThemeStore),

    // The order here is actually not important: all the auth information
    // is automatically initialized and handled by the AWS Amplify package.
    async initialize() {
      await this.authStore._initialize();
      await this.itemsStore._initialize();
      await this.themeStore._initialize();
    },
  };

  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
};
