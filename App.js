import React from "react";
import "mobx-react-lite/batchingForReactNative";

import AppNavigator from "./navigation/AppNavigator";
import KittenProvider from "./kitten/KittenProvider";
import { StoreProvider } from "./store/StoreProvider";

export default function App() {
  return (
    <StoreProvider>
      <KittenProvider>
        <AppNavigator />
      </KittenProvider>
    </StoreProvider>
  );
}
