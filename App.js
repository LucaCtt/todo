import React from "react";

import AppNavigator from "./navigation/AppNavigator";
import useCachedResources from "./hooks/useCachedResources";
import KittenProvider from "./kitten/KittenProvider";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <KittenProvider>
        <AppNavigator />
      </KittenProvider>
    );
  }
}
