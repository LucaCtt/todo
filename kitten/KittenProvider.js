import React from "react";
import { StatusBar } from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { observer } from "mobx-react-lite";

import { useStore } from "../hooks/useStore";
import { theme as customTheme, mapping } from "./theme.json";

export default KittenProvider = observer(({ children }) => {
  const store = useStore();

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        {...eva}
        theme={{ ...eva[store.theme], ...customTheme }}
        customMapping={mapping}
      >
        <StatusBar
          barStyle={store.theme === "light" ? "dark-content" : "light-content"}
          backgroundColor={
            eva[store.theme][
              `color-basic-${store.theme === "light" ? "100" : "800"}`
            ]
          }
        />
        {children}
      </ApplicationProvider>
    </>
  );
});
