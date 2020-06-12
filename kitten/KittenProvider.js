import React from "react";
import { StatusBar } from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { observer } from "mobx-react-lite";

import useTheme from "../hooks/useTheme";
import { theme as customTheme, mapping } from "./theme.json";
import useCachedResources from "../hooks/useCachedResources";

export default KittenProvider = observer(({ children }) => {
  const isLoadingComplete = useCachedResources();
  const [theme] = useTheme();

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
          <StatusBar
            barStyle={theme === "light" ? "dark-content" : "light-content"}
            backgroundColor={
              eva[theme][`color-basic-${theme === "light" ? "100" : "800"}`]
            }
          />
          {children}
        </ApplicationProvider>
      </>
    );
  }
});
