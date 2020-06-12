import React from "react";
import "mobx-react-lite/batchingForReactNative";

import AppNavigator from "./navigation/AppNavigator";
import useCachedResources from "./hooks/useCachedResources";
import KittenProvider from "./kitten/KittenProvider";
import { StoreProvider } from "./store/StoreProvider";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <StoreProvider>
        <KittenProvider>
          <AppNavigator />
        </KittenProvider>
      </StoreProvider>
    );
  }
}
