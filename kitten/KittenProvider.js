import React from "react";
import { StatusBar } from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import ThemeContext from "./ThemeContext";
import useThemeStore from "../hooks/useThemeStore";
import { theme as customTheme, mapping } from "./theme.json";

export default KittenProvider = ({ children }) => {
  const [theme, toggleTheme] = useThemeStore("light");

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
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
      </ThemeContext.Provider>
    </>
  );
};
