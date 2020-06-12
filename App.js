import React from "react";
import "mobx-react-lite/batchingForReactNative";

import AppNavigator from "./navigation/AppNavigator";
import UIProvider from "./components/UIProvider";
import StoreProvider from "./store/StoreProvider";

export default function App() {
  return (
    <StoreProvider>
      <UIProvider>
        <AppNavigator />
      </UIProvider>
    </StoreProvider>
  );
}
