import React from "react";
import { StatusBar, View } from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { observer } from "mobx-react-lite";

import useTheme from "../hooks/useTheme";
import useCachedResources from "../hooks/useCachedResources";
import { theme as customTheme, mapping } from "../../eva-theme.json";

const UIProvider = ({ children }) => {
  // Resources are loaded here instead than on the root component because access to the store
  // is required to load the stored theme.
  const isLoadingComplete = useCachedResources();
  const themeStore = useTheme();

  const backgroundColor =
    eva[themeStore.theme][
      `color-basic-${themeStore.theme === "light" ? "100" : "800"}`
    ];

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider
          {...eva}
          theme={{ ...eva[themeStore.theme], ...customTheme }}
          customMapping={mapping}
        >
          <StatusBar
            barStyle={
              themeStore.theme === "light" ? "dark-content" : "light-content"
            }
            backgroundColor={backgroundColor}
          />
          {/*eslint-disable-next-line react-native/no-inline-styles*/}
          <View style={{ flex: 1, backgroundColor: backgroundColor }}>
            {children}
          </View>
        </ApplicationProvider>
      </>
    );
  }
};

export default observer(UIProvider);
