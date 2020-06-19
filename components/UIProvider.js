import React from "react";
import { StatusBar } from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { observer } from "mobx-react-lite";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useTheme from "../hooks/useTheme";
import useCachedResources from "../hooks/useCachedResources";
import { theme as customTheme, mapping } from "../eva-theme.json";

export default UIProvider = observer(({ children }) => {
  // Resources are loaded here instead than on the root component because access to the store
  // is required to load the stored theme.
  const isLoadingComplete = useCachedResources();
  const { theme } = useTheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider
          {...eva}
          theme={{ ...eva[theme], ...customTheme }}
          customMapping={mapping}
        >
          <SafeAreaProvider>
            <StatusBar
              barStyle={theme === "light" ? "dark-content" : "light-content"}
              backgroundColor={
                eva[theme][`color-basic-${theme === "light" ? "100" : "800"}`]
              }
            />
            {children}
          </SafeAreaProvider>
        </ApplicationProvider>
      </>
    );
  }
});
