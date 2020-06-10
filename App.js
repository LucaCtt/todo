import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import AppNavigator from "./navigation/AppNavigator";
import useCachedResources from "./hooks/useCachedResources";
import { theme, mapping } from "./theme.json";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider
          {...eva}
          theme={{ ...eva.light, ...theme }}
          customMapping={mapping}
        >
          <AppNavigator />
        </ApplicationProvider>
      </>
    );
  }
}
