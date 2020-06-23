import React, { createContext } from "react";

import createStore from "./store";

export const storeContext = createContext(null);

export default StoreProvider = ({ children }) => (
  <storeContext.Provider value={createStore()}>
    {children}
  </storeContext.Provider>
);
